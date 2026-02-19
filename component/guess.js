export default function Guess({guess, guessPosition, colors}){
    const text = guess.split('')

    function getClass(i) {
        if (colors) return colors[i]
        if (guessPosition === i) return 'active'
        return ''
    }

    return(
        <>
            <div className='guess'>
                {text.map((letter, i) => (
                    <input
                        key={i}
                        className={getClass(i)}
                        type="text"
                        minLength={1}
                        maxLength={1}
                        size={1}
                        value={letter === '_' ? '' : letter}
                        readOnly
                    />
                ))}
            </div>
            <style jsx>{`
                .guess{
                    display:flex;
                    justify-content:center;
                    margin:1em 0;
                  }
                input{
                    border:none;
                    background-color:darkgray;
                    padding:10px 15px;
                    text-align:center;
                    color:white;
                    font-size:large;
                    font-weight:bold;
                    text-transform:uppercase;
                    margin:4px;
                    width:45px;
                    height:45px;
                }
                .active{
                    background-color:#555;
                    border:2px solid white;
                }
                .green{
                    background-color:#538d4e;
                }
                .yellow{
                    background-color:#b59f3b;
                }
                .gray{
                    background-color:#3a3a3c;
                }
        `}</style>
        </>
    )
}
