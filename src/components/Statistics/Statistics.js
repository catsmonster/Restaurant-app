import React from 'react';

const Statistics = ({logTables}) => {
    return (
        <div>
            {`The total revenue from all checked out tables is ${logTables}`}
        </div>
    );
};

export default Statistics;