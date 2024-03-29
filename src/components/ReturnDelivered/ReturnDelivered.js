import React from 'react';

const ReturnDelivered = ({name, onRemoveOrderedItem}) => {
    return (
        <div onClick={()=> {

        }}>
            {name[1]<2 ?
                <div className='foodContainer'>
                    <button className='deleteBtn' onClick={()=> onRemoveOrderedItem({name}, 'delivered')}></button>
                    <span>{`${name[1]} plate of ${name[0]}`}</span>
                </div> :
                <div className='foodContainer'>
                    <button className='deleteBtn' onClick={()=> onRemoveOrderedItem({name}, 'delivered')}></button>
                    <span>{`${name[1]} plates of ${name[0]}`}</span>
                </div>}

        </div>
    );
};

export default ReturnDelivered;