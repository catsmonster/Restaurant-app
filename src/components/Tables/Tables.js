import React from 'react';
import './Tables.css';
import Table from "../Table/Table";

const Tables = ({tempTables, path, setPath, setTempTables, clickCount, setClickCount, setClickedTable, clickedTable}) => {

    // This mapping will change in a later step when tempTables becomes an object
    const tablesArray = Object.values(tempTables).map((tableItem) => <Table setClickedTable={setClickedTable} setPath={setPath} key={tableItem.id} id={tableItem.id} tempTables={tempTables} setTempTables={setTempTables} clickedTable={clickedTable} /> );

    return (
        <div>
            <div className='container'>
                {tablesArray}
            </div>
            <button className={'addTable'} onClick={()=> {
                const newTableId = clickCount; // Use current clickCount for the new table's ID
                setClickCount(clickCount + 1); // Increment clickCount for the next ID
                setTempTables(prevTables => ({
                    ...prevTables,
                    [newTableId]: { // newTableId (from clickCount) is the key
                        id: newTableId, // Store the id also within the object for convenience
                        orders: [],
                        total: 0,
                        tableActive: 'false',
                        timeAdded: new Date()
                    }
                }));
            }
            }>
                Add a new table
            </button>
        </div>
    );
};

export default Tables;