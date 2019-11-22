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
      order => order.time.getTime() === time.getTime()
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

  const getMenuFromOrders = orders => {
    return orders.map((order, i) => {
      return (
        <ToDoMenu
          key={i}
          id={i}
          name={order.name}
          table={order.table}
          time={order.time}
          status={order.status}
          onSetDone={onSetDone}
        />
      );
    });
  };

  const waitingOrders = getRelevantOrders('waiting');
  const selectedMenu = getMenuFromOrders(waitingOrders);

  const preparedOrders = getRelevantOrders('prepared');
  const preparedMenu = getMenuFromOrders(preparedOrders);

  return (
    <div className="statisticsMain">
      <h2>To Do list:</h2>
      <div className="containerOfContainer">
        <h3>Waiting list:</h3>
        <Scroll>{selectedMenu}</Scroll>
        <h3>Ready for delivery:</h3>
        <Scroll>{preparedMenu}</Scroll>
      </div>
      <h2>Income:</h2>
      <span>{`The total revenue from all checked out tables is ${parseFloat(
        logTables.total
      ).toFixed(2)}`}</span>
    </div>
  );
};

export default Statistics;
