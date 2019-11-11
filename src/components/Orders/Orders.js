import React, {useEffect} from 'react';

const Orders = ({tempTables, clickedItem}) => {
    return (
      <div>
          <button onClick={
                  useEffect(()=> {
                      tempTables[clickedItem].orders = ['chicken'];
                      tempTables[clickedItem].total = 50;
                  })
          }>click me</button>
          <h1>{`The selected table contains the following details: ${tempTables[clickedItem].id}, ${tempTables[clickedItem].orders}, ${tempTables[clickedItem].total}`}</h1>
      </div>
    );
};

export default Orders;