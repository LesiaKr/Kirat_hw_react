import React from 'react';

export class DivComponent extends React.Component{

    divClick = () => {
        console.log('Div clicked');
    }

    btnClick = (e) => {
        console.log('Button clicked');
        e.stopPropagation();
    }

    render(){

        return(
            <>
                <div onClick={this.divClick}>
                    Div
                    <br />
                    <button onClick={this.btnClick}>Button</button>
                </div>
            </>
        )
    }
}
