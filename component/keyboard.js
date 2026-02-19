
export default function Keyboard({ setKeyPressed, onDelete, onEnter, keyColors = {} }){
    function keyPressHandler(key){
        setKeyPressed(key)
    }

    function Key({ letter }) {
        return (
            <button
                type="button"
                className={`key ${keyColors[letter] || ''}`}
                onMouseDown={() => keyPressHandler(letter)}
            >
                {letter}
            </button>
        )
    }

    const row1 = ['Q','W','E','R','T','Y','U','I','O','P']
    const row2 = ['A','S','D','F','G','H','J','K','L']
    const row3 = ['Z','X','C','V','B','N','M']

    return (
        <>
        <div className='keyboard'>
            <div className='keyboard_row'>
                {row1.map(l => <Key key={l} letter={l} />)}
            </div>
            <div className='keyboard_row'>
                {row2.map(l => <Key key={l} letter={l} />)}
            </div>
            <div className='keyboard_row'>
                <button type="button" className='key long' onMouseDown={onEnter}>ENTER</button>
                {row3.map(l => <Key key={l} letter={l} />)}
                <button type="button" className='key long' onMouseDown={onDelete}>Delete</button>
            </div>
        </div>

        <style jsx>{`
            .keyboard{
                display:grid;
                grid-template-columns:1fr;
                margin-top:1em;
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
                opacity:0.8;
            }
            .green{
                background-color:#538d4e;
                color:white;
            }
            .yellow{
                background-color:#b59f3b;
                color:white;
            }
            .gray{
                background-color:#3a3a3c;
                color:white;
            }
        `}</style>

        </>
    )
}
