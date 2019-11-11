import React from 'react';
import './Menu.css';
import {tempTables} from "../tempTables";

const Menu = ({id, name, price, clickedTable}) => {
    return (
        <div onClick={()=> {
            tempTables[clickedTable].orders.push(name);
            tempTables[clickedTable].total += price;
        }} className='menuContainer'>
                <ul className='menuItem'>
                    <li>{name}</li>
                </ul>
                <ul className='menuPrice'>
                    <li>{price}</li>
                </ul>
        </div>
    );
};

export default Menu;