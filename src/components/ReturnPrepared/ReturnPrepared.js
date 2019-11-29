import React from 'react';

const ReturnPrepared = ({name, onRemoveOrderedItem, clickMenuItem, setClickMenuItem}) => {
    return (
        <div>
            {name[1]<2 ?
                <div className='foodContainer'>
                    <button className='deleteBtn' onClick={()=> onRemoveOrderedItem({name}, 'prepared')}></button>
                    <span>{`${name[1]} plate of ${name[0]}`}</span>
                    <button>Expand</button>
                </div> :
                <div className='foodContainer'>
                    <button className='deleteBtn' onClick={()=> onRemoveOrderedItem({name}, 'prepared')}></button>
                    <span>{`${name[1]} plates of ${name[0]}`}</span>
                    <button>Expand</button>
                </div>}

        </div>
    );
};

export default ReturnPrepared;