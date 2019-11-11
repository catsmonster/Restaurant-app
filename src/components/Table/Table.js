import React from 'react';
import './Table.css'

const Table = ({id, setPath, setClickedItem}) => {
    return (
        <div className={'tableDiv'} id={id} onClick={()=> {
            setClickedItem(id);
            setPath(`order_${id}`)}

        }>
            {id}
        </div>
    );
};

export default Table;