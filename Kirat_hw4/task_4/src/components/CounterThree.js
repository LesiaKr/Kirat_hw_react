import React from "react";

class CounterThree extends React.Component{

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
   
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.counter > 3) {
            return false;
        } else {
            return true;
        }
    }

    render(){
        let wordBtn = " ";
        if(this.state.counter < 3){
            wordBtn = "Click me 3 times";
        }else{
            wordBtn = "No more";
        }
        return(
            <>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>
                    {wordBtn}
                </button>
            </>
        )
    }
}
export default CounterThree;