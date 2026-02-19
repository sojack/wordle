import React, { useState,useEffect, useRef } from "react";

import Keyboard from './keyboard'
import Guess from './guess'
import { TARGET_WORDS } from '../data/words'

function getTodaysWord() {
    const start = new Date(2024, 0, 1)
    const today = new Date()
    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24))
    return TARGET_WORDS[diff % TARGET_WORDS.length]
}

export default function Wordle(){
    const [targetWord] = useState(getTodaysWord)
    const [guess, setGuess] = useState('______')
    const [guessPosition, setGuessPosition] = useState(0)
    const [keyPressed, setKeyPressed] = useState()
    const notInitialRender = useRef(false)
    
    useEffect(
        ()=>{
            if (notInitialRender.current) {
                const x = guess.split('')
                x[guessPosition]=keyPressed
                setGuess(x.join(''))
                if (guessPosition<5){
                    setGuessPosition( (guessPosition+=1)%6)
                }

            } else {
                notInitialRender.current = true
              }
        },[keyPressed]
    )

    return(
    <>
            {/* <p>Key pressed: {keyPressed}</p>
            <p>Guess: {guess}</p>
            <p>Guess Position: {guessPosition}</p> */}

        <Guess guess={guess} guessPosition={guessPosition}/>

        <Keyboard setKeyPressed={setKeyPressed} setGuessPosition={setGuessPosition} setGuess={setGuess} guessPosition={guessPosition} className='keyboard'/>

        <style jsx>{`
            .keyboard{
                margin:1em 0;
            }
        `}</style>

    </>
    )
}