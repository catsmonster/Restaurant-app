import React from 'react';
import './Table.css'

const Table = ({id, setPath, setClickedTable}) => {
    return (
        <div className={'tableDiv'} id={id} onClick={()=> {
            setClickedTable(id);
            setPath(`order_${id}`)}

        }>
            {id}
        </div>
    );
};

export default Table;