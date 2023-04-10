import React from 'react';
import './FormComponentSass.scss';

class FormComponentSass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          login: '',
          password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
     
    handleChange(e) {
    
      const { name } = e.target;
    
      this.setState({ [name]: e.target.value });
    }
    
    handleSubmit(e) {
      e.preventDefault();
      alert("Submit success");
      this.setState({
        login: '',
        password: '',
      });
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit} className='form'>
                    <label className='form__label' htmlFor="login">Login: </label>
                    <input 
                        type="text" 
                        name="login"
                        value={this.state.login} 
                        onChange={this.handleChange}
                        required 
                        minLength={5}
                        maxLength={16}/>
                    <br />

                    <label className='form__label' htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        name="password"
                        value={this.state.password} 
                        onChange={this.handleChange}
                        required 
                        minLength={6}
                        maxLength={16}/>
                    <br />

                    <button className='form__btn'>
                        Submit
                    </button>
                </form>
            </>
        )
    }
}
export default FormComponentSass;