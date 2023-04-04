import { v4 } from 'uuid';
import React from 'react';

class StudentsLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            group1: ["Ivan Petriv", "Viktoria Noe", "Maria Klym", "Ivan Pascal", "Vlad Kiryk", "Inna Dydok"],
            group2: []
        };
    }

    handleClick = () => {
        const { group1, group2 } = this.state;

        if (group1.length === 0) {
            alert("Список порожній");
            return ;
            
        }
        const newGroup2 = [...group2, group1[0]];
        let newGroup1 = group1.shift();
        newGroup1 = group1;
       
        this.setState({
            group1: newGroup1,
            group2: newGroup2
        });
    };

    render() {
        const { group1, group2 } = this.state;
        
        return (
            <>
                <h2>Список студентів</h2>
                <h3>Група перша</h3>
                <ul>
                    {group1.map(item => {
                            const id = v4();
                            return(<li key={id}>{item}</li>)
                        })
                    }
                </ul>
                <h3>Група друга</h3>
                <ul>
                    {group2.map(item => {
                            const id = v4();
                            return(<li key={id}>{item}</li>)
                        })
                    }
                </ul>
                <button onClick={this.handleClick}>Перевести</button>
            </>
        );
    }
}

export default StudentsLists;