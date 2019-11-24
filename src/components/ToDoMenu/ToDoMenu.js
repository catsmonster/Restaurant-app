import React from 'react';
import './ToDoMenu.css'

const ToDoMenu = ({name, onSetDone, time, table, status, comment, clickSpecialItem, setClickSpecialItem}) => {

    const commentsString = comment.join(', ');

    const initialState = (
        <div>
            {commentsString.length > 0 && clickSpecialItem === 'false' ?
            <div>
                <span>
                    {`Order ${name} of table ${table + 1}`}
                </span>
                <button onClick={()=> setClickSpecialItem(time)}>More info</button>
            </div> : commentsString.length > 0 && clickSpecialItem === time ?
            <div>
                <span>
                    {`Order ${name} of table ${table + 1}`}
                </span>
                <button onClick={()=> setClickSpecialItem('false')}>Less info</button>
                <span>{commentsString}</span>
            </div> :
            <span>
                {`Order ${name} of table ${table + 1}`}
            </span>
            }
            {status === 'waiting' ?
                <button className='addTable' onClick={() => onSetDone({time, table, status})}>Prepared</button> : status === 'prepared' ?
                    <button className='addTable' onClick={() => onSetDone({time, table, status})}>Delivered</button> :
                    null
            }
        </div>
    );

    return (
        <div className='todoList'>
            {initialState}
        </div>
    );
};

export default ToDoMenu;