import React, { useState } from "react";
import List from "../List/List";
import { v4 } from 'uuid';
import ListShouldCompUpdate from "../ListShouldCompUpdate/ListShouldCompUpdate";

const TodoList = () => {

    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAdd = (e) => {
        e.preventDefault();
        if (inputValue === '') return;

        const id = v4();
        const item = (inputValue);
        setItems([
            {item, id},...items
        ]);

        setInputValue('');
        console.log(inputValue);
    }

    return(
        <>
            <h1>TODO List</h1>
            <form onSubmit={handleAdd}>
                <input type="text" onChange={handleChange} value={inputValue}/>
                <button>Add</button>
            </form>
            <div className="component-block">
                <div style={{marginRight: "50px"}}>
                    <h4>List</h4>
                    <List items={items}/>
                </div>
            
                <div style={{marginLeft: "50px"}}>
                    <h4>ListShouldCompUpdate</h4>
                    <ListShouldCompUpdate items={items}/>
                </div>
            </div>
        </>
    )
}
export default TodoList;