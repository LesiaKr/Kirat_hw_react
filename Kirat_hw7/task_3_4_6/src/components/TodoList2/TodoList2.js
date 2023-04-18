import React from 'react';
import List2 from './components/List2/List2';
import Modal from './components/Modal/Modal';

class TodoList2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isVisible: false, 
      value: ''
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick = () => {
    this.setState(prev => ({isVisible: !prev.isVisible}));
  }

  handleAdd(todo) {
    this.setState({
      list: [...this.state.list, todo]
    });
  }

  handleDelete(id) {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    });
  }

  render() {
    const titleStyle={
      margin: "0",
      padding: "50px 0 20px 0",
    }
    return(
      <div>
        <h2 style={titleStyle}>TodoList2</h2>
        <button onClick={this.handleClick}>
          Додати
        </button>
        {this.state.isVisible && <Modal  handleAdd={this.handleAdd}/>}
        <List2 list={this.state.list} onDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default TodoList2;