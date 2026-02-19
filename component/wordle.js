import React, { useState, useEffect, useCallback } from "react";

import Keyboard from './keyboard'
import Guess from './guess'
import { TARGET_WORDS } from '../data/words'

const MAX_GUESSES = 6
const STORAGE_KEY = 'wordle-state'

function getTodaysWord() {
    const start = new Date(2024, 0, 1)
    const today = new Date()
    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24))
    return TARGET_WORDS[diff % TARGET_WORDS.length]
}

function getTodaysDate() {
    return new Date().toISOString().slice(0, 10)
}

function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
        if (saved && saved.date === getTodaysDate()) return saved
    } catch {}
    return null
}

function saveState(guesses, submittedRows) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        date: getTodaysDate(),
        guesses,
        submittedRows,
    }))
}

// Returns array of 6 colors: 'green', 'yellow', or 'gray'
function evaluateGuess(guess, target) {
    const result = Array(6).fill('gray')
    const targetLetters = target.split('')
    const guessLetters = guess.split('')

    // First pass: mark greens
    for (let i = 0; i < 6; i++) {
        if (guessLetters[i] === targetLetters[i]) {
            result[i] = 'green'
            targetLetters[i] = null
            guessLetters[i] = null
        }
    }

    // Second pass: mark yellows
    for (let i = 0; i < 6; i++) {
        if (guessLetters[i] === null) continue
        const idx = targetLetters.indexOf(guessLetters[i])
        if (idx !== -1) {
            result[i] = 'yellow'
            targetLetters[idx] = null
        }
    }

    return result
}

export default function Wordle(){
    const [targetWord] = useState(getTodaysWord)
    const [saved] = useState(loadState)
    const [guesses, setGuesses] = useState(saved ? saved.guesses : Array(MAX_GUESSES).fill('______'))
    const [submittedRows, setSubmittedRows] = useState(saved ? saved.submittedRows : 0)
    const [currentRow, setCurrentRow] = useState(saved ? saved.submittedRows : 0)
    const [guessPosition, setGuessPosition] = useState(0)
    function handleDelete() {
        setGuessPosition(prev => {
            if (prev > 0) return prev - 1
            return 0
        })
        setGuesses(prev => {
            const updated = [...prev]
            const x = updated[currentRow].split('')
            x[guessPosition] = '_'
            if (guessPosition > 0) x[guessPosition - 1] = '_'
            updated[currentRow] = x.join('')
            return updated
        })
    }

    // Build a map of letter -> best color (green > yellow > gray)
    function getKeyColors() {
        const colors = {}
        const priority = { green: 3, yellow: 2, gray: 1 }
        for (let i = 0; i < submittedRows; i++) {
            const guess = guesses[i]
            const result = evaluateGuess(guess, targetWord)
            for (let j = 0; j < 6; j++) {
                const letter = guess[j]
                const color = result[j]
                if (!colors[letter] || priority[color] > priority[colors[letter]]) {
                    colors[letter] = color
                }
            }
        }
        return colors
    }

    const keyColors = getKeyColors()

    const won = submittedRows > 0 && guesses[submittedRows - 1] === targetWord
    const lost = submittedRows >= MAX_GUESSES && !won
    const gameOver = won || lost

    function handleEnter() {
        if (gameOver) return
        const current = guesses[currentRow]
        if (current.includes('_')) return
        const newSubmitted = submittedRows + 1
        setSubmittedRows(newSubmitted)
        saveState(guesses, newSubmitted)
        if (current !== targetWord && currentRow < MAX_GUESSES - 1) {
            setCurrentRow(currentRow + 1)
            setGuessPosition(0)
        }
    }

    function handleKeyPress(key) {
        if (gameOver) return
        setGuesses(prev => {
            const updated = [...prev]
            const x = updated[currentRow].split('')
            x[guessPosition] = key
            updated[currentRow] = x.join('')
            return updated
        })
        if (guessPosition < 5) {
            setGuessPosition(guessPosition + 1)
        }
    }

    function handleDeleteSafe() {
        if (gameOver) return
        handleDelete()
    }

    const handlePhysicalKey = useCallback((e) => {
        const key = e.key.toUpperCase()
        if (key === 'ENTER') {
            handleEnter()
        } else if (key === 'BACKSPACE') {
            handleDeleteSafe()
        } else if (/^[A-Z]$/.test(key)) {
            handleKeyPress(key)
        }
    })

    useEffect(() => {
        window.addEventListener('keydown', handlePhysicalKey)
        return () => window.removeEventListener('keydown', handlePhysicalKey)
    }, [handlePhysicalKey])

    return(
    <>
        <div className="board">
            {guesses.map((g, i) => (
                <Guess
                    key={i}
                    guess={g}
                    guessPosition={!gameOver && i === currentRow ? guessPosition : -1}
                    colors={i < submittedRows ? evaluateGuess(g, targetWord) : null}
                />
            ))}
        </div>

        {won && <p className="message">You got it!</p>}
        {lost && <p className="message">The word was {targetWord}</p>}

        <Keyboard
            setKeyPressed={handleKeyPress}
            onDelete={handleDeleteSafe}
            onEnter={handleEnter}
            keyColors={keyColors}
        />

        <style jsx>{`
            .board{
                display:flex;
                flex-direction:column;
                align-items:center;
            }
            .message{
                font-size:1.2em;
                font-weight:bold;
                margin:1em 0;
                text-align:center;
            }
        `}</style>

    </>
    )
}
