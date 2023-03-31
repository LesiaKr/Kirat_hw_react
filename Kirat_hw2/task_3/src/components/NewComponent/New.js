import React from 'react';

class New extends React.Component{
    render(){
        
        return(
            <div>
                <div>Привіт, {this.props.name}</div>
                <br />
                <div>User - {this.props.name} {this.props.surname}</div>
                <div>Age - {this.props.age}</div>
                <div>Biography - Lorem ipsum dolor sit amet <b>{this.props.name}</b> consectetur adipisicing elit. Accusamus deleniti magnam optio impedit nisi <b>{this.props.age}</b> dolorem nam laboriosam illo architecto delectus distinctio sint, quibusdam dolore doloribus quam quasi suscipit neque ipsum.</div>
            </div>
        )
    }
}
export default New;