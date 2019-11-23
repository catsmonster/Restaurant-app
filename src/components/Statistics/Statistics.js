import React from 'react';
import './Statistics.css'
import ToDoMenu from "../ToDoMenu/ToDoMenu";
import Scroll from "../Scroll";

const Statistics = ({logTables}) => {

    const logOrdersArray = logTables.orders.flat(Infinity);

    const returnedItems = logOrdersArray.map((order, i) => {
        return <ToDoMenu key={i} id={i} name={logOrdersArray[i].name} table={logOrdersArray[i].table} time={logOrdersArray[i].time.getTime()}
                         status={logOrdersArray[i].status} />
    });

    return (
        <div className='statisticsMain'>
                <h2>Income:</h2>
                <span>{`The total revenue from all checked out tables is ${parseFloat(logTables.total).toFixed(2)}`}</span>
                <div>
                    <h3>The following orders were returned:</h3>
                    <Scroll>
                        {returnedItems}
                    </Scroll>
                </div>
        </div>
    );
};

export default Statistics;