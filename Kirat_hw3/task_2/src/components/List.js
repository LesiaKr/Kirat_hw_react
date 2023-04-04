import React from 'react';

//Варіант 1. Через ключ - toString()

class List extends React.Component{
  render(){
    const namesArr = this.props.names;
    const listItems = namesArr.map((name) =>
      <li key={name.toString()}>
        {name}
      </li>
    );
    
    return(
      <>
        <p>Варіант 1. Через ключ - toString()</p>
        <ul>{listItems}</ul>
      </>
    )
  }
}
export default List;