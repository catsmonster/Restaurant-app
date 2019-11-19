import React from 'react';
import './Menu.css';

const Menu = ({name, price, onClickMenu}) => {
    return (
        <div onClick={()=> {
            onClickMenu({name, price})}} className='menuContainer'>
            <ul className='menuItem'>
                <li>{name}</li>
            </ul>
            <ul className='menuItem'>
                <li>{price}</li>
            </ul>
        </div>
    );
};

export default Menu;