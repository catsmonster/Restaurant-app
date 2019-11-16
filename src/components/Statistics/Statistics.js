import React from 'react';
import RemoveMenu from "../RemoveMenu/RemoveMenu";

const Statistics = ({logTables, setLogTables}) => {
    let count = {};
    logTables.orders.forEach((i) => {
        count[i] = (count[i] || 0) + 1;
    });
    let arrCount = Object.entries(count);

    const onRemoveOrderedItem = ({name}) => {
      const updatedLog = {...logTables};
      const indexOfItem = updatedLog.orders.indexOf(name[0]);
      updatedLog.orders.splice(indexOfItem, 1);
      setLogTables(updatedLog);
    };

    const selectedMenuArr = arrCount.map((item, i)=> {
        return <RemoveMenu key={i} id={i} name={arrCount[i]} onRemoveOrderedItem={onRemoveOrderedItem} />
    });

    return (
        <div>
            <h2>To Do list:</h2>
            <div className='containerOfContainer'>
                <div className='menuArrayContainer'>
                    {selectedMenuArr}
                </div>
            </div>
            <h2>Income:</h2>
            {`The total revenue from all checked out tables is ${parseFloat(logTables.total).toFixed(2)}`}
        </div>
    );
};

export default Statistics;