import React from 'react';

class ControlForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      textArea: '',
      checkbox: false,
      isOutputResult: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
  handleChange(e) {

    const { type, checked, value, name } = e.target;
    const currValue = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: currValue
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState(prev=>({isOutputResult: !prev.isOutputResult}))
  }

  render() {
    let jsonStr = JSON.stringify(this.state);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <hr />
          <label htmlFor="input">Iм'я:  </label>
          <input 
            type="text" 
            name="input"
            value={this.state.input} 
            onChange={this.handleChange} />
          <hr />

          <label htmlFor="checkbox">Погоджуюсь  </label>
          <input 
            type="checkbox" 
            name="checkbox"
            value={this.state.checkbox} 
            onChange={this.handleChange} />
          <hr />

          <label htmlFor="textArea">Повідомленя: </label>
          <br />
          <textarea 
            name="textArea"
            value={this.state.textArea} 
            onChange={this.handleChange} />
          <hr />
          
          <button>
            Отримати значення
          </button>
        </form>

        <p>{this.state.isOutputResult && `Варіант у json форматі: ${jsonStr}`}</p>
        <hr />

        <p>{this.state.isOutputResult && `Ім'я: ${this.state.input}`}</p>
        <p>{this.state.isOutputResult && `Статус: ${this.state.checkbox ? "Погоджено" : "Не погоджено"}`}</p>
        <p>{this.state.isOutputResult && `Повідомлення: ${this.state.textArea}`}</p>

      </div>
    )
  }
}

export default ControlForm;