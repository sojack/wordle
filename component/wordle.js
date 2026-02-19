import React, { useState,useEffect, useRef } from "react";

import Keyboard from './keyboard'
import Guess from './guess'
import { TARGET_WORDS } from '../data/words'

const MAX_GUESSES = 6

function getTodaysWord() {
    const start = new Date(2024, 0, 1)
    const today = new Date()
    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24))
    return TARGET_WORDS[diff % TARGET_WORDS.length]
}

export default function Wordle(){
    const [targetWord] = useState(getTodaysWord)
    const [guesses, setGuesses] = useState(Array(MAX_GUESSES).fill('______'))
    const [currentRow, setCurrentRow] = useState(0)
    const [guessPosition, setGuessPosition] = useState(0)
    const [keyPressed, setKeyPressed] = useState()
    const notInitialRender = useRef(false)

    useEffect(
        ()=>{
            if (notInitialRender.current) {
                setGuesses(prev => {
                    const updated = [...prev]
                    const x = updated[currentRow].split('')
                    x[guessPosition]=keyPressed
                    updated[currentRow] = x.join('')
                    return updated
                })
                if (guessPosition<5){
                    setGuessPosition(guessPosition + 1)
                }

            } else {
                notInitialRender.current = true
              }
        },[keyPressed]
    )

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

    function handleEnter() {
        const current = guesses[currentRow]
        if (current.includes('_')) return
        if (currentRow < MAX_GUESSES - 1) {
            setCurrentRow(currentRow + 1)
            setGuessPosition(0)
        }
    }

    return(
    <>
        <div className="board">
            {guesses.map((g, i) => (
                <Guess
                    key={i}
                    guess={g}
                    guessPosition={i === currentRow ? guessPosition : -1}
                />
            ))}
        </div>

        <Keyboard
            setKeyPressed={setKeyPressed}
            onDelete={handleDelete}
            onEnter={handleEnter}
        />

        <style jsx>{`
            .board{
                display:flex;
                flex-direction:column;
                align-items:center;
            }
        `}</style>

    </>
    )
}
