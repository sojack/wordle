import React, { useState,useEffect, useRef } from "react";

import Keyboard from './keyboard'
import Guess from './guess'

export default function Wordle(){
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