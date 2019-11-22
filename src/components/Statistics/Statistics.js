import React from 'react';
import ToDoMenu from '../ToDoMenu/ToDoMenu';
import Scroll from '../Scroll';
import './Statistics.css';

const Statistics = ({
  logTables,
  tempTables,
  setTempTables,
  getRelevantOrders
}) => {
  const onSetDone = ({ time, table, status }) => {
    const updateTempTables = [...tempTables];
    const indexOfSelectedOrder = updateTempTables[table].orders.findIndex(
      order => order.time.getTime() === time
    );
    if (status === 'waiting') {
      updateTempTables[table].orders[indexOfSelectedOrder].status = 'prepared';
    } else {
      updateTempTables[table].orders[indexOfSelectedOrder].status = 'delivered';
      const ordersDelivered = updateTempTables[table].orders.filter(
        order => order.status === 'delivered'
      );
      if (ordersDelivered.length === updateTempTables[table].orders.length) {
        updateTempTables[table].tableActive = 'eating';
      }
    }
    setTempTables(updateTempTables);
  };

  const waitingArray = getRelevantOrders('waiting');

  const selectedMenuArr = waitingArray.map((item, i) => {
    return (
      <ToDoMenu
        key={i}
        id={i}
        name={waitingArray[i][0]}
        table={waitingArray[i][1]}
        time={waitingArray[i][2]}
        status={waitingArray[i][3]}
        onSetDone={onSetDone}
      />
    );
  });

  const deliveredArray = getRelevantOrders('prepared');

  const deliveredMenuArr = deliveredArray.map((item, i) => {
    return (
      <ToDoMenu
        key={i}
        id={i}
        name={deliveredArray[i][0]}
        table={deliveredArray[i][1]}
        time={deliveredArray[i][2]}
        onSetDone={onSetDone}
      />
    );
  });

  return (
    <div className="statisticsMain">
      <h2>To Do list:</h2>
      <div className="containerOfContainer">
        <h3>Waiting list:</h3>
        <Scroll>{selectedMenuArr}</Scroll>
        <h3>Ready for delivery:</h3>
        <Scroll>{deliveredMenuArr}</Scroll>
      </div>
      <h2>Income:</h2>
      <span>{`The total revenue from all checked out tables is ${parseFloat(
        logTables.total
      ).toFixed(2)}`}</span>
    </div>
  );
};

export default Statistics;
