import React from 'react';
import './Table.css'
import DeleteBtn from "../DeleteBtn/DeleteBtn";

const Table = ({id, setPath, setClickedTable, setTempTables, tempTables}) => {

    const setActiveTable = () => {
        if (tempTables[id].tableActive === 'false') {
            return 'tableDiv'
        } else if (tempTables[id].tableActive === 'waiting') {
            return 'activeTableDiv'
        } else {
            return 'eatingTableDiv'
        }
    }

    return (
        <div className={setActiveTable()} id={id}>
            <DeleteBtn id={id} setTempTables={setTempTables} tempTables={tempTables} />
            <p className='clickTable' onClick={()=> {
                setClickedTable(id);
                setPath(`order_${id}`)}

            }>{`Click here to view and edit table number ${id + 1}`}</p>
        </div>
    );
};

export default Table;