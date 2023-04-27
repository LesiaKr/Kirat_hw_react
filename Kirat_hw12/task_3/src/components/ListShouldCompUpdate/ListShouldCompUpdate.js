import React from "react";

class ListShouldCompUpdate extends React.Component {

    shouldComponentUpdate(currProps) {
        return currProps.items.length !== this.props.items.length;
    }

    render(){
        console.log("render from ListShouldCompUpdate");
        return(
            <ol>
                {this.props.items.map(element => {
                    const { id, item } = element;
                    return <li key={id}>{item}</li>
                })}
            </ol>
        )
    }
}
export default ListShouldCompUpdate;