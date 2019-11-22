import React from 'react';
import './Menu.css';

const Menu = ({ name, price, onClickMenu }) => {
  return (
    <div
      onClick={() => {
        onClickMenu({ name, price });
      }}
      className="menuContainer"
    >
      <span className="menuItem">{name}</span>
      <span className="menuItem">{price}</span>
    </div>
  );
};

export default Menu;
