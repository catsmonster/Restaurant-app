import React from 'react';

const SpecialOrders = ({name, comment}) => {

    return (
        <div>
            <span>{name}</span>
            <span>{comment[0]}</span>
        </div>
    );
};

export default SpecialOrders;