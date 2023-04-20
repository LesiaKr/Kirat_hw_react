import React, { useState } from 'react';

const Privat = () => {
    const [isAdult, setIsAdult] = useState(false);

    const handleClick = () => {
      alert("Oops!");
    } 

    if(!isAdult) {
        return (
            <div >
                <button style={{backgroundColor:"lightGreen"}} 
                        onClick={() => setIsAdult(true)}>
                    Мені більш як 18 років
                </button>
                <br />
                <button style={{backgroundColor:"red"}} 
                        onClick={handleClick}>
                    Мені ще немає 18 років
                </button>
            </div>
        )
    }
    return (
        <div style={{backgroundColor:"lightblue", padding: "100px"}}>
            Private route page
        </div>
    )
}

export default Privat;