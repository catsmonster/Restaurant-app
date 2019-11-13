import React from 'react';

const DeleteBtn = ({tempTables, setTempTables, id, setClickCount, clickCount}) => {
    return (
        <div>
        <button onClick={()=> {
            const updatedTempTables = tempTables.filter((item) => item.id !== id);
            for (let i=0; i<updatedTempTables.length; i++) {
                updatedTempTables[i].id = i;
            }
            setTempTables(updatedTempTables);
            setClickCount(clickCount - 1);
        }}>X</button>
        </div>
    );
};

export default DeleteBtn;