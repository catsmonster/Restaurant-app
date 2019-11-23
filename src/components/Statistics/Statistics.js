import React from 'react';
import './Statistics.css'

const Statistics = ({logTables}) => {


    return (
        <div className='statisticsMain'>
            <h2>Income:</h2>
            <span>{`The total revenue from all checked out tables is ${parseFloat(logTables.total).toFixed(2)}`}</span>
        </div>
    );
};

export default Statistics;