import React from 'react';

class User extends React.Component{
    render(){

        return(
            <div>
               {this.props.children}
            </div>
        )
    }
}
export default User;