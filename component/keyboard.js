
export default function Keyboard({ setKeyPressed, setGuessPosition, setGuess, guessPosition }){
    function deleteHandler() {
        setGuessPosition( (prev) => {
            if (prev>0){
                return (prev-1)%6
            }else{
                return 0
            }
        } )

        setGuess((prev)=>{
            const x=prev.split("")
            x[guessPosition]="_"
            x[guessPosition-1]="_"
            return x.join("")
        })
    }

    function keyPressHandler(key){
        setKeyPressed(key)
    }
    return (
        <>
        <div className='keyboard'>
            <div className='keyboard_row'>
                <button type="button" className='key' tabIndex="0" onMouseDown={()=>keyPressHandler("Q")}>Q</button>
                <button type="button" className='key' tabIndex="1" onMouseDown={()=>keyPressHandler("W")}>W</button>
                <button type="button" className='key' tabIndex="2" onMouseDown={()=>keyPressHandler("E")}>E</button>
                <button type="button" className='key' tabIndex="3" onMouseDown={()=>keyPressHandler("R")}>R</button>
                <button type="button" className='key' tabIndex="4" onMouseDown={()=>keyPressHandler("T")}>T</button>
                <button type="button" className='key' tabIndex="5" onMouseDown={()=>keyPressHandler("Y")}>Y</button>
                <button type="button" className='key' tabIndex="6" onMouseDown={()=>keyPressHandler("U")}>U</button>
                <button type="button" className='key' tabIndex="7" onMouseDown={()=>keyPressHandler("I")}>I</button>
                <button type="button" className='key' tabIndex="8" onMouseDown={()=>keyPressHandler("O")}>O</button>
                <button type="button" className='key' tabIndex="9" onMouseDown={()=>keyPressHandler("P")}>P</button>
            </div>
            <div className='keyboard_row'>
                <button type="button" className='key' tabIndex="10" onMouseDown={()=>keyPressHandler("A")}>A</button>
                <button type="button" className='key' tabIndex="11" onMouseDown={()=>keyPressHandler("S")}>S</button>
                <button type="button" className='key' tabIndex="12" onMouseDown={()=>keyPressHandler("D")}>D</button>
                <button type="button" className='key' tabIndex="13" onMouseDown={()=>keyPressHandler("F")}>F</button>
                <button type="button" className='key' tabIndex="14" onMouseDown={()=>keyPressHandler("G")}>G</button>
                <button type="button" className='key' tabIndex="15" onMouseDown={()=>keyPressHandler("H")}>H</button>
                <button type="button" className='key' tabIndex="16" onMouseDown={()=>keyPressHandler("J")}>J</button>
                <button type="button" className='key' tabIndex="17" onMouseDown={()=>keyPressHandler("K")}>K</button>
                <button type="button" className='key' tabIndex="18" onMouseDown={()=>keyPressHandler("L")}>L</button>
            </div>
            <div className='keyboard_row'>
                <button type="button" className='key long'>ENTER</button>
                <button type="button" className='key' tabIndex="19" onMouseDown={()=>keyPressHandler("Z")}>Z</button>
                <button type="button" className='key' tabIndex="20" onMouseDown={()=>keyPressHandler("X")}>X</button>
                <button type="button" className='key' tabIndex="21" onMouseDown={()=>keyPressHandler("C")}>C</button>
                <button type="button" className='key' tabIndex="22" onMouseDown={()=>keyPressHandler("V")}>V</button>
                <button type="button" className='key' tabIndex="23" onMouseDown={()=>keyPressHandler("B")}>B</button>
                <button type="button" className='key' tabIndex="24" onMouseDown={()=>keyPressHandler("N")}>N</button>
                <button type="button" className='key' tabIndex="25" onMouseDown={()=>keyPressHandler("M")}>M</button>
                <button type="button" className='key long' tabIndex="26" onMouseDown={deleteHandler}>Delete</button>
            </div>
        </div>

        <style jsx>{`
            .keyboard{
                display:grid;
                grid-template-columns:1fr;
            }
            .keyboard_row{
                display:flex;
                justify-content:center;
            }
            .key{
                border:none;
                background-color:lightgrey;
                padding:1.5em 1em;
                color:black;
                margin:8px 2px;
                cursor:pointer;
            }
            .key:hover{
                background-color:darkgray;
                color:white;
            }

        `}</style>

        </>
    )
}