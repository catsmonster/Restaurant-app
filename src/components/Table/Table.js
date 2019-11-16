import React from 'react';
import './Table.css'
import DeleteBtn from "../DeleteBtn/DeleteBtn";

const Table = ({id, setPath, setClickedTable, setTempTables, tempTables, setClickCount, clickCount}) => {

    const setActiveTable = () => {
        if (tempTables[id].tableActive === false) {
            return 'tableDiv'
        } else {
            return 'activeTableDiv'
        }
    }

    return (
        <div className={setActiveTable()} id={id}>
            <DeleteBtn id={id} setTempTables={setTempTables} tempTables={tempTables} setClickCount={setClickCount} clickCount={clickCount}/>
            <p className='clickTable' onClick={()=> {
                setClickedTable(id);
                setPath(`order_${id}`)}

            }>{`Click here to view and edit table number ${id + 1}`}</p>
        </div>
    );
};

export default Table;