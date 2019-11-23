import React from 'react';
import './Menu.css';

const Menu = ({name, price, onClickMenu, clickMenuItem, setClickMenuItem}) => {

    const onChangeClickMenuItem = (source) => {
        const updatedClickMenuItem = {...clickMenuItem};
        if (source === 'clickMenu') {
            updatedClickMenuItem.status = name;
            setClickMenuItem(updatedClickMenuItem);
        } else {
            updatedClickMenuItem.id = source;
            updatedClickMenuItem.status = 'false';
            setClickMenuItem(updatedClickMenuItem);
            onClickMenu({name, price});
        }
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
            {clickMenuItem.status === 'false' ?
                <div>
                {initialMenu}
                </div> : clickMenuItem.status === name ?
            <div>
                {initialMenu}
                <button onClick={()=> onChangeClickMenuItem('add')}>Add</button>
                <button onClick={()=> onChangeClickMenuItem('addCustom')}>Add with a custom price</button>
                <button onClick={()=> onChangeClickMenuItem('addComment')}>Add with a comment</button>
                <button onClick={()=> onChangeClickMenuItem('addCustomComment')}>Add with a custom price and a comment</button>
            </div> : <div>
                        {initialMenu}
                    </div>
            }
        </div>
    );
};

export default Menu;