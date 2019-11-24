import React from 'react';
import './Menu.css';

const Menu = ({id, name, price, onClickMenu, clickMenuItem, setClickMenuItem, path, tempMenu}) => {

    const onChangeClickMenuItem = (source) => {
        const updatedClickMenuItem = {...clickMenuItem};
        if (source === 'clickMenu' && !updatedClickMenuItem.toggle) {
            updatedClickMenuItem.status = id;
            updatedClickMenuItem.toggle = true;
        } else {
            updatedClickMenuItem.status = 'false';
            updatedClickMenuItem.toggle = false;
            onClickMenu({name, price, source, id});
        }
        setClickMenuItem(updatedClickMenuItem);
    };

    const indexOfSelectedItem = tempMenu.findIndex((item) => item.id === id);

    const initialMenu =
        (
            <div className='menuContainer'>
                {clickMenuItem.toggle === true && clickMenuItem.status === id ?
                <button onClick={()=> {
                    onChangeClickMenuItem('clickMenu')
                }}>&#8911;</button> :
                <button onClick={()=> {
                    onChangeClickMenuItem('clickMenu')
                }}>&#8910;</button>
                }
                <span className='menuItem'>
                    {name}
                </span>
                <span className='menuItem'>
                    {price}
                </span>
                {path.includes('order_') ?
                    <button onClick={() => onChangeClickMenuItem('add')}>&oplus;</button> : null
                }
            </div>
        );

    return (
        <div>
            {clickMenuItem.status === id && path.includes('order_') ?
                <div>
                    {initialMenu}
                    <button onClick={()=> onChangeClickMenuItem('addCustom')}>Add with a custom price</button>
                    <button onClick={()=> onChangeClickMenuItem('addComment')}>Add with a comment</button>
                    <button onClick={()=> onChangeClickMenuItem('addCustomComment')}>Add with a custom price and a comment</button>
                </div> : clickMenuItem.status === id && path.includes('custom') ?
                <div>
                    {initialMenu}
                    {tempMenu[indexOfSelectedItem].active === false ?
                    <button onClick={() => onChangeClickMenuItem('recover')}>Recover dish</button> :
                    <div>
                        <button onClick={() => onChangeClickMenuItem('Remove')}>Remove dish</button>
                        <button onClick={()=> onChangeClickMenuItem('updateName')}>Update dish name</button>
                        <button onClick={()=> onChangeClickMenuItem('updatePrice')}>Update dish price</button>
                        <button onClick={()=> onChangeClickMenuItem('updateCategory')}>Update dish category</button>
                    </div>
                    }
                </div> :
                <div>
                    {initialMenu}
                </div>
            }
        </div>
    );
};

export default Menu;