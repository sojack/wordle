
export default function Keyboard({ setKeyPressed, onDelete, onEnter, keyColors = {} }){
    function keyPressHandler(key){
        setKeyPressed(key)
    }

    const row1 = ['Q','W','E','R','T','Y','U','I','O','P']
    const row2 = ['A','S','D','F','G','H','J','K','L']
    const row3 = ['Z','X','C','V','B','N','M']

    return (
        <>
        <div className='keyboard'>
            <div className='keyboard_row'>
                {row1.map(l => (
                    <button key={l} type="button" className={`key ${keyColors[l] || ''}`} onMouseDown={() => keyPressHandler(l)}>{l}</button>
                ))}
            </div>
            <div className='keyboard_row'>
                {row2.map(l => (
                    <button key={l} type="button" className={`key ${keyColors[l] || ''}`} onMouseDown={() => keyPressHandler(l)}>{l}</button>
                ))}
            </div>
            <div className='keyboard_row'>
                <button type="button" className='key long' onMouseDown={onEnter}>ENTER</button>
                {row3.map(l => (
                    <button key={l} type="button" className={`key ${keyColors[l] || ''}`} onMouseDown={() => keyPressHandler(l)}>{l}</button>
                ))}
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
                align-items:center;
            }
            .key{
                border:none;
                background-color:lightgrey;
                padding:0 1em;
                height:58px;
                font-size:0.8em;
                color:black;
                margin:8px 2px;
                cursor:pointer;
                box-sizing:border-box;
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
