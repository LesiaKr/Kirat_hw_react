import React from "react";

const List = ({items}) => {
        return(
            <ul>
                {items.map(element => {
                    const { id, item } = element;
                    return <li key={id}>{item}</li>
                })}
            </ul>
        )
}
export default List;