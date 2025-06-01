import React from 'react';

const DeleteBtn = ({tempTables, setTempTables, id}) => { // setClickCount and clickCount might become unused if not needed for other reasons after this change
    return (
        <div className='deleteBtnContainer'>
        <button className='deleteBtn' onClick={()=> {
            const { [id]: tableToRemove, ...remainingTables } = tempTables;
            setTempTables(remainingTables);
            // No longer decrement clickCount
        }}></button>
        </div>
    );
};

export default DeleteBtn;