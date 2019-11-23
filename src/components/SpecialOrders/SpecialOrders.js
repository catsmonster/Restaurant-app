import React from 'react';

const SpecialOrders = ({name, comment, time, clickSpecialItem, setClickSpecialItem}) => {


    const initialState = (
        <div>
            <button className='deleteBtn' onClick={()=> null}></button>
            <span>{name}</span>
            {clickSpecialItem === time ?
                <button onClick={() => setClickSpecialItem('false')}>Hide info</button> :
                <button onClick={() => setClickSpecialItem(time)}>More info</button>
            }
        </div>
    );

    const commentsString = comment.join(', ');


    return (
        <div className='foodContainer'>
            {clickSpecialItem === time ?
                <div>
                    {initialState}
                    <p>{commentsString}</p>
                </div> :
                <div>
                    {initialState}
                </div>
            }
        </div>
    );
};

export default SpecialOrders;