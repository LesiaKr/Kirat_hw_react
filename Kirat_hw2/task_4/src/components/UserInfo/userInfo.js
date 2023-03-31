import React from 'react';

class UserInfo extends React.Component{
    render(){
        const person = {
            firstName: 'Ivan',
            secondName: 'Petriv',
            age: 32
        }

        return(
            <div>
                UserInfo: 
                <br />
                {person.firstName + ' ' + person.secondName} age - {person.age}
            </div>
        )
    }
}
export default UserInfo;