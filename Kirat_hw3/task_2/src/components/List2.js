import React from 'react';

//Варіант 2. Через ключ - index

class List2 extends React.Component{
    render(){
        const namesArr = ["Ivan", "Viktoria", "Maria", "Ivan", "Vlad"];
        return(
            <>
                <p>Варіант 2. Через ключ - index</p>
                {namesArr.map((name, index) => {
                    return(
                        <li key={index}> {name} </li>
                    )
                })}                
            </>
        )
    }
}
export default List2;