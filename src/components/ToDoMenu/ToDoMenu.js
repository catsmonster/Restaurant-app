import React from 'react';
import './ToDoMenu.css'

const ToDoMenu = ({name, onSetDone, time, table, status}) => {
    return (
        <div className='todoList'>
            <span>
                {`Order ${name} of table ${table+1}`}
            </span>
            {status === 'waiting' ?
                <button className='addTable' onClick={() => onSetDone({time, table, status})}>Prepared</button> :
                <button className='addTable' onClick={() => onSetDone({time, table, status})}>Delivered</button>
            }
        </div>
    );
};

export default ToDoMenu;