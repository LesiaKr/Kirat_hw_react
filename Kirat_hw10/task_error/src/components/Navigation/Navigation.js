import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const goodsIds = ["apple", "orange", "banana", "plum", "pear"];
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/main">
                        Main 
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contacts">
                        Contacts
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/goods">
                        Goods:
                    </NavLink>
                    {goodsIds.map(goodsId => {
                        return(
                            <li key={goodsId}>
                                <NavLink to={`/goods/${goodsId}`}>
                                    {goodsId}
                                </NavLink>
                            </li>
                        )
                    })}
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;