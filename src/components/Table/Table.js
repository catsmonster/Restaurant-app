import React from 'react';
import './Table.css'
import DeleteBtn from "../DeleteBtn/DeleteBtn";

const Table = ({id, setPath, setClickedTable, setTempTables, tempTables, setClickCount, clickCount}) => {
    return (
        <div className={'tableDiv'} id={id}>
            <DeleteBtn id={id} setTempTables={setTempTables} tempTables={tempTables} setClickCount={setClickCount} clickCount={clickCount}/>
            <p onClick={()=> {
                setClickedTable(id);
                setPath(`order_${id}`)}

            }>{`Click here to view and edit table number ${id + 1}`}</p>
        </div>
    );
};

export default Table;