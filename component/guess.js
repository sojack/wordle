export default function Guess({guess, guessPosition}){
    const text= guess.split('')


    return(
        <>
            <div className='guess'>
                <input className={ guessPosition==0 && "active" } type={"text"} minLength={1} maxLength={1} size={1} value={text[0]} readOnly/>
                <input className={ guessPosition==1 && "active" } type={"text"} minLength={1} maxLength={1} size={1} value={text[1]} readOnly/>
                <input className={ guessPosition==2 && "active" } type={"text"} minLength={1} maxLength={1} size={1} value={text[2]} readOnly/>
                <input className={ guessPosition==3 && "active" } type={"text"} minLength={1} maxLength={1} size={1} value={text[3]} readOnly/>
                <input className={ guessPosition==4 && "active" } type={"text"} minLength={1} maxLength={1} size={1} value={text[4]} readOnly/>
                <input className={ guessPosition==5 && "active" } type={"text"} minLength={1} maxLength={1} size={1} value={text[5]} readOnly/>
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
                    text-transform:uppercase;
                    margin:4px;
                }
                .active{
                    background-color:green;
                }
        `}</style>
        </>

    )
}