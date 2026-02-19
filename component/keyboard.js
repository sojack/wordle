
export default function Keyboard({ setKeyPressed, onDelete, onEnter }){
    function keyPressHandler(key){
        setKeyPressed(key)
    }
    return (
        <>
        <div className='keyboard'>
            <div className='keyboard_row'>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("Q")}>Q</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("W")}>W</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("E")}>E</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("R")}>R</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("T")}>T</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("Y")}>Y</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("U")}>U</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("I")}>I</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("O")}>O</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("P")}>P</button>
            </div>
            <div className='keyboard_row'>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("A")}>A</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("S")}>S</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("D")}>D</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("F")}>F</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("G")}>G</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("H")}>H</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("J")}>J</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("K")}>K</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("L")}>L</button>
            </div>
            <div className='keyboard_row'>
                <button type="button" className='key long' onMouseDown={onEnter}>ENTER</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("Z")}>Z</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("X")}>X</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("C")}>C</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("V")}>V</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("B")}>B</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("N")}>N</button>
                <button type="button" className='key' onMouseDown={()=>keyPressHandler("M")}>M</button>
                <button type="button" className='key long' onMouseDown={onDelete}>Delete</button>
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
