import React from 'react';
import './Tables.css';
import Table from "../Table/Table";

const Tables = ({tempTables, path, setPath, setTempTables, clickCount, setClickCount, setClickedItem}) => {
        const tablesArray = tempTables.map((user, i) => <Table setClickedItem={setClickedItem} setPath={setPath} key={tempTables[i].id} id={tempTables[i].id} /> );
            return (
                <div>
                    <div className='container'>
                        {tablesArray}
                    </div>
                    <button className={'addTable'} onClick={()=> {
                        setClickCount(clickCount + 1);
                        setTempTables([...tempTables, {id: clickCount, orders: [], total: 0}])}
                    }>
                        Add a new table
                    </button>
                </div>
            );
};

export default Tables;