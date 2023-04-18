import React from "react";
import { v4 } from "uuid";
    
class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          isVisible: false, 
        }
        this.prevState = this.state;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    handleChange(e) {
        this.setState({
          value: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.value) {
            const item = {
                value: this.state.value,
                id: v4(),
            }
            this.props.handleAdd(item);      
            this.setState(
                this.prevState); 
        }
    }
    onModalClose(){        
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }
    render(){
        return(
            <>
            {!this.state.isVisible && (
                <div className="modal__wrapper">
                    <div className="modal__body">
                        <div className="modal__close" onClick={this.onModalClose}>x</div>
                        <input  type="text" 
                                value={this.state.value} 
                                onChange={this.handleChange} 
                                placeholder="Enter todo"
                        />
                        <button type="submit"
                            onClick={this.handleSubmit} disabled={!this.state.value} 
                        > Готово </button>
                    </div>
                 </div>)
            }          
            </>
        )
    }
}
export default Modal