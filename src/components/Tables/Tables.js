import React from 'react';
import './Tables.css';
import Table from "../Table/Table";

const Tables = ({tempTables, path, setPath, setTempTables, clickCount, setClickCount, setClickedTable, clickedTable}) => {

    const tablesArray = tempTables.map((user, i) => <Table setClickCount={setClickCount} clickCount={clickCount} setClickedTable={setClickedTable} setPath={setPath} key={tempTables[i].id} id={tempTables[i].id} tempTables={tempTables} setTempTables={setTempTables} clickedTable={clickedTable} /> );

    return (
        <div>
            <div className='container'>
                {tablesArray}
            </div>
            <button className={'addTable'} onClick={()=> {
                setClickCount(clickCount + 1);
                setTempTables([...tempTables, {
                    id: clickCount,
                    orders: [],
                    total: 0,
                    tableActive: false,
                    timeAdded: new Date()
                }])

            }
            }>
                Add a new table
            </button>
        </div>
    );
};

export default Tables;