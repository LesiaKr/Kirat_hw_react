import React from "react";

class Counter extends React.Component{
    
    state = {
        counter: 0,
    }

    handleClick = () => {
        this.setState({counter: this.state.counter + 1});
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state.counter) {
            alert("Number of clicks: " + this.state.counter);
        }
    }

    render(){
        return(
            <>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>
                    Click
                </button>
            </>
        )
    }
}
export default Counter;