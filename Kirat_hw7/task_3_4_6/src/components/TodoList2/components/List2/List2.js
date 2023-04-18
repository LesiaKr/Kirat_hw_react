import React from 'react';

class List extends React.Component {
 
  render() {
    let liStyle={
      border: "1px solid grey",
      width: "500px",
      display: "flex",
      padding: "3px 8px",
    }
    const btnStyle={
       marginLeft: "auto",
       color: "red"
    }
    return (
      
      <ul style={{marginTop: 70}}>
        {this.props.list.map(item => {const {id, value} = item;
          return (
            <li style={liStyle} key={id}>
              <input type="checkbox" />
              {value}
              <button style={btnStyle} onClick={() => this.props.onDelete(id)}> X
              </button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default List;