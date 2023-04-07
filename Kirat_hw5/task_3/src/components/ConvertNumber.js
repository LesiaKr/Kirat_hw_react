import React from 'react';
import ConvertToTenth from './ConvertToTenth';
import ConvertToHundreds from './ConvertToHundreds';
  
class ConvertNumber extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {number: ''};
      }
    
      handleChange(e) {
        this.setState({number: e.target.value});
      }
    
      render() {
        const number = this.state.number;
        return (
          <>
            <fieldset>
                <legend>Введіть число:</legend>
                <input
                type="number"
                value={number}
                onChange={this.handleChange} />
            </fieldset>
            <hr />
            <fieldset>
                <legend>Конвертація: * 0,5:</legend>
                <ConvertToTenth number={parseFloat(number)} />
            </fieldset>
            <hr />
            <fieldset>
                <legend>Конвертація: * 0,05:</legend>
                <ConvertToHundreds number={parseFloat(number)} />
            </fieldset>           
          </>
        );
    }
}

export default ConvertNumber;