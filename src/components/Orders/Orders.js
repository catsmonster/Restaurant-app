import React from 'react';
import './Orders.css';
import RemoveMenu from '../RemoveMenu/RemoveMenu';
import Scroll from '../Scroll';
import CategoriesWithMenu from '../Menu/CategoriesWithMenu';

const Orders = ({
  path,
  tempTables,
  clickedTable,
  setTempTables,
  logTables,
  setLogTables,
  setMenuSearch,
  menuSearch,
  selectedCategory,
  setSelectedCategory,
  categoryActive,
  setCategoryActive,
  getRelevantOrders,
  groupOrdersByName,
  tempMenu,
  setTempMenu
}) => {
  const waitingOrders = getRelevantOrders('waiting');
  const preparedOrders = getRelevantOrders('prepared');
  const ordersToDisplay = waitingOrders.concat(preparedOrders);

  // status: Array of statuses to consider
  // order: {name: string, count: number}
  const onRemoveOrderedItem = status => orders => {
    const updatedTempTables = [...tempTables];
    const orderedItemsArr = updatedTempTables[clickedTable].orders;
    const indexOfOrderedItem = orderedItemsArr.findIndex(
      item => item.name === orders.name && status.includes(item.status)
    );
    updatedTempTables[clickedTable].orders.splice(indexOfOrderedItem, 1);
    let priceOfSelectedItem = 0;
    for (let i = 0; i < tempMenu.length; i++)
      if (tempMenu[i].name === orders.name) {
        priceOfSelectedItem = tempMenu[i].price;
      }
    updatedTempTables[clickedTable].total -= priceOfSelectedItem;
    if (updatedTempTables[clickedTable].total === 0) {
      updatedTempTables[clickedTable].tableActive = 'false';
      updatedTempTables[clickedTable].timeAdded = new Date();
    }
    setTempTables(updatedTempTables);
  };

  const getMenuFromGroupedOrders = (ordersGroupedByName, status) => {
    return Object.keys(ordersGroupedByName).map(name => (
      <RemoveMenu
        key={name}
        id={name}
        order={{ name, count: ordersGroupedByName[name].length }}
        onRemoveOrderedItem={onRemoveOrderedItem(status)}
      />
    ));
  };

  const ordersGroupedByName = groupOrdersByName(ordersToDisplay);
  const selectedMenu = getMenuFromGroupedOrders(ordersGroupedByName, [
    'waiting',
    'prepared'
  ]);

  const tempDeliveredOrders = getRelevantOrders('delivered');
  const deliveredOrdersGroupedByName = groupOrdersByName(tempDeliveredOrders);
  const deliveredOrders = getMenuFromGroupedOrders(
    deliveredOrdersGroupedByName,
    ['delivered']
  );

  const clearTable = () => {
    const updatedTempTable = [...tempTables];
    updatedTempTable[clickedTable] = {
      id: clickedTable,
      orders: [],
      total: 0,
      tableActive: 'false',
      timeAdded: new Date()
    };
    setTempTables(updatedTempTable);
  };

  const logTotal = () => {
    const totalWithTip = tempTables[clickedTable].total;
    const updatedLogTables = { ...logTables };
    updatedLogTables.total = logTables.total + totalWithTip;
    setLogTables(updatedLogTables);
  };

  const tipChange = () => {
    let tip = Number(prompt('Is there a tip?', '0'));
    const updatedTempTables = [...tempTables];
    updatedTempTables[clickedTable].total += tip;
    setTempTables(updatedTempTables);
    logTotal();
    clearTable();
  };

  const tipChangeTen = () => {
    const updatedTempTables = [...tempTables];
    updatedTempTables[clickedTable].total *= 1.1;
    setTempTables(updatedTempTables);
    logTotal();
    clearTable();
  };

  return (
    <div className="statisticsMain">
      <h1>This is da menu!</h1>
      <CategoriesWithMenu
        setTempTables={setTempTables}
        setCategoryActive={setCategoryActive}
        categoryActive={categoryActive}
        setMenuSearch={setMenuSearch}
        tempTables={tempTables}
        path={path}
        clickedTable={clickedTable}
        menuSearch={menuSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        tempMenu={tempMenu}
        setTempMenu={setTempMenu}
      />
      <h1>{`Table ${tempTables[clickedTable].id +
        1} ordered the following items:`}</h1>
      {selectedMenu.length > 0 && deliveredOrders.length > 0 ? (
        <div className="orderHeaders">
          <h3 className="waitingHeader">Items waiting:</h3>
          <h3 className="deliveredHeader">Items delivered:</h3>
        </div>
      ) : selectedMenu.length > 0 ? (
        <div className="orderHeaders">
          <h3 className="waitingHeader">Items waiting:</h3>
        </div>
      ) : deliveredOrders.length > 0 ? (
        <div className="orderHeaders">
          <h3 className="deliveredHeader">Items delivered:</h3>
        </div>
      ) : (
        <div></div>
      )}
      <div className="menuArrayContainer">
        <div className="selectedMenu">
          <Scroll>{selectedMenu}</Scroll>
        </div>
        <div className="selectedMenu">
          <Scroll>{deliveredOrders}</Scroll>
        </div>
      </div>
      <p>{`For a total of ${tempTables[clickedTable].total}`}</p>
      <button
        className="addTable"
        onClick={() => {
          if (ordersToDisplay.length > 0) {
            alert('Table has not yet received all orders!');
          } else {
            tipChange();
          }
        }}
      >
        Checkout and add a custom tip
      </button>
      <button
        className="addTable"
        onClick={() => {
          if (ordersToDisplay.length > 0) {
            alert('Table has not yet received all orders!');
          } else {
            tipChangeTen();
          }
        }}
      >
        Checkout and add 10% tip
      </button>
    </div>
  );
};

export default Orders;
