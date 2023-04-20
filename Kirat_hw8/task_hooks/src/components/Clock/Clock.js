import React, { useState, useEffect } from "react";

function Clock(){
    const [date, setDate] = useState(new Date());

    useEffect(() => {    
        const timerID = setInterval(() => 
            setDate(new Date()), 1000);
        console.log('ComponentDidMount')

        return () => clearInterval(timerID);      
      }, []);

    useEffect(() => {
        if (date !== new Date()) {
            console.log('shouldComponentUpdate');
        }
    }, [date]);

    return(
        <div>
          <h1>Привіт, світе!</h1>
          <h2>Зараз {date.toLocaleTimeString()}.</h2>
        </div>
    )
}
export default Clock;