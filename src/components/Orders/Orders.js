import React from 'react';

const Orders = ({tempTables, clickedItem, setTempTables}) => {
    return (
      <div>
          <button onClick={
              ()=> {setTempTables([tempTables.filter(item => {
                  return item !== tempTables[clickedItem];
              })])}
          }>click me</button>
          <h1>{`The selected table contains the following details: ${tempTables.flat(6)}`}</h1>
      </div>
    );
};

export default Orders;