import React from 'react';

const ToDoMenu = ({name, onSetDone, time, table, status}) => {
    return (
        <div>
            <span>
                {`Order ${name} of table ${table+1}`}
            </span>
            {status === 'waiting' ?
                <button className='newTable' onClick={() => onSetDone({time, table, status})}>Prepared</button> :
                <button className='newTable' onClick={() => onSetDone({time, table, status})}>Delivered</button>
            }
        </div>
    );
};

export default ToDoMenu;