import React from 'react';
import './Menu.css';

const Menu = ({name, price, onClickMenu, clickMenuItem, setClickMenuItem, path}) => {

    const onChangeClickMenuItem = (source) => {
        const updatedClickMenuItem = {...clickMenuItem};
        if (source === 'clickMenu') {
            updatedClickMenuItem.status = name;
        } else {
            updatedClickMenuItem.status = 'false';
            onClickMenu({name, price, source});
        }
        setClickMenuItem(updatedClickMenuItem);
    };

    const initialMenu =
        (
            <div onClick={()=> {
                onChangeClickMenuItem('clickMenu')
                }} className='menuContainer'>
                <span className='menuItem'>
                    {name}
                </span>
                <span className='menuItem'>
                    {price}
                </span>
            </div>
        );

    return (
        <div>
            {clickMenuItem.status === name && path.includes('order_') ?
                <div>
                    {initialMenu}
                    <button onClick={()=> onChangeClickMenuItem('add')}>Add</button>
                    <button onClick={()=> onChangeClickMenuItem('addCustom')}>Add with a custom price</button>
                    <button onClick={()=> onChangeClickMenuItem('addComment')}>Add with a comment</button>
                    <button onClick={()=> onChangeClickMenuItem('addCustomComment')}>Add with a custom price and a comment</button>
                </div> : clickMenuItem.status === name && path.includes('custom') ?
                <div>
                    {initialMenu}
                    <button onClick={()=> onChangeClickMenuItem('Remove')}>Remove dish</button>
                    <button onClick={()=> onChangeClickMenuItem('updateName')}>Update dish name</button>
                    <button onClick={()=> onChangeClickMenuItem('updatePrice')}>Update dish price</button>
                </div> :
                <div>
                    {initialMenu}
                </div>
            }
        </div>
    );
};

export default Menu;