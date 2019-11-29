import React from 'react';

const RemoveMenu = ({name, onRemoveOrderedItem, clickMenuItem, setClickMenuItem}) => {

    const updateMenu = (
        <div>
            {}
        </div>
    );

    return (
        <div>
            {name[1]<2 ?
                <div className='foodContainer'>
                    <button className='deleteBtn' onClick={()=> onRemoveOrderedItem({name}, 'waiting')}></button>
                    <span>{`${name[1]} plate of ${name[0]}`}</span>
                    <button>Expand</button>
                </div> :
                <div className='foodContainer'>
                    <button className='deleteBtn' onClick={()=> onRemoveOrderedItem({name}, 'waiting')}></button>
                    <span>{`${name[1]} plates of ${name[0]}`}</span>
                    <button>Expand</button>
                </div>}

        </div>
    );
};

export default RemoveMenu;