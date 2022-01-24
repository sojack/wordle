
export default function Keyboard({ setKeyPressed,setGuessPosition }){
    function deleteHandler() {
        setGuessPosition( (prev) => (prev-1)%6
        )
    }

    return (
        <>
        <div className='keyboard'>
            <div className='keyboard_row'>
                <button type="button" className='key' tabIndex="0" onMouseDown={()=>setKeyPressed("Q")}>Q</button>
                <button type="button" className='key' tabIndex="1" onMouseDown={()=>setKeyPressed("W")}>W</button>
                <button type="button" className='key' tabIndex="2" onMouseDown={()=>setKeyPressed("E")}>E</button>
                <button type="button" className='key' tabIndex="3" onMouseDown={()=>setKeyPressed("R")}>R</button>
                <button type="button" className='key' tabIndex="4" onMouseDown={()=>setKeyPressed("T")}>T</button>
                <button type="button" className='key' tabIndex="5" onMouseDown={()=>setKeyPressed("Y")}>Y</button>
                <button type="button" className='key' tabIndex="6" onMouseDown={()=>setKeyPressed("U")}>U</button>
                <button type="button" className='key' tabIndex="7" onMouseDown={()=>setKeyPressed("I")}>I</button>
                <button type="button" className='key' tabIndex="8" onMouseDown={()=>setKeyPressed("O")}>O</button>
                <button type="button" className='key' tabIndex="9" onMouseDown={()=>setKeyPressed("P")}>P</button>
            </div>
            <div className='keyboard_row'>
                <button type="button" className='key' tabIndex="10" onMouseDown={()=>setKeyPressed("A")}>A</button>
                <button type="button" className='key' tabIndex="11" onMouseDown={()=>setKeyPressed("S")}>S</button>
                <button type="button" className='key' tabIndex="12" onMouseDown={()=>setKeyPressed("D")}>D</button>
                <button type="button" className='key' tabIndex="13" onMouseDown={()=>setKeyPressed("F")}>F</button>
                <button type="button" className='key' tabIndex="14" onMouseDown={()=>setKeyPressed("G")}>G</button>
                <button type="button" className='key' tabIndex="15" onMouseDown={()=>setKeyPressed("H")}>H</button>
                <button type="button" className='key' tabIndex="16" onMouseDown={()=>setKeyPressed("J")}>J</button>
                <button type="button" className='key' tabIndex="17" onMouseDown={()=>setKeyPressed("K")}>K</button>
                <button type="button" className='key' tabIndex="18" onMouseDown={()=>setKeyPressed("L")}>L</button>
            </div>
            <div className='keyboard_row'>
                <button type="button" className='key long'>ENTER</button>
                <button type="button" className='key' tabIndex="19" onMouseDown={()=>setKeyPressed("Z")}>Z</button>
                <button type="button" className='key' tabIndex="20" onMouseDown={()=>setKeyPressed("X")}>X</button>
                <button type="button" className='key' tabIndex="21" onMouseDown={()=>setKeyPressed("C")}>C</button>
                <button type="button" className='key' tabIndex="22" onMouseDown={()=>setKeyPressed("V")}>V</button>
                <button type="button" className='key' tabIndex="23" onMouseDown={()=>setKeyPressed("B")}>B</button>
                <button type="button" className='key' tabIndex="24" onMouseDown={()=>setKeyPressed("N")}>N</button>
                <button type="button" className='key' tabIndex="25" onMouseDown={()=>setKeyPressed("M")}>M</button>
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
                padding:.8em 1em;
                // color:white;
                margin:4px;
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