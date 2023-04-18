import React from 'react';
import List from './components/List/List';
import SubmitForm from './components/SubmitForm/SubmitForm';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  state = {
    list: [],
  }

  handleAdd(todo) {
    this.setState({
      list: [...this.state.list, todo],
    });
  }

  handleDelete(id) {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    });
  }

  render() {
    return(
      <div>
        <h2 style={{paddingTop: 50}}>TodoList</h2>
        <SubmitForm handleAdd={this.handleAdd}/>
        <List list={this.state.list} onDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default TodoList;