import React, { useState } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Tables from '../components/Tables/Tables';
import Orders from '../components/Orders/Orders';
import Statistics from '../components/Statistics/Statistics';
import CustomizeMenu from '../components/CustomizeMenu/CustomizeMenu';

function App() {
  /*const [tables, setTables] = useState([]);*/
  const [clickCount, setClickCount] = useState(1);
  const [path, setPath] = useState('tables');
  const [clickedTable, setClickedTable] = useState(0);
  const [logTables, setLogTables] = useState({ orders: [], total: 0 });
  const [menuSearch, setMenuSearch] = useState('');
  const [menuInput, setMenuInput] = useState({
    name: '',
    price: 0,
    category: ''
  });
  const [addNewItemtoMenu, setAddNewItemtoMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categoryActive, setCategoryActive] = useState(0);
  const [navActive, setNavActive] = useState(0);
  const [tempTables, setTempTables] = useState([
    {
      id: 0,
      orders: [],
      total: 0,
      tableActive: 'false',
      timeAdded: new Date()
    }
  ]);
  const [tempMenu, setTempMenu] = useState([
    {
      id: 1,
      name: 'grilled chicken',
      price: 80,
      category: 'main dishes',
      active: true
    },
    {
      id: 2,
      name: 'ceaser salad',
      price: 55,
      category: 'starters',
      active: true
    },
    {
      id: 3,
      name: 'beef steak',
      price: 120,
      category: 'main dishes',
      active: true
    },
    {
      id: 4,
      name: 'pepperony',
      price: 90,
      category: 'pizzas',
      active: true
    }
  ]);

  const resetWhenChangingPath = () => {
    setCategoryActive(0);
    setSelectedCategory('All');
    setMenuSearch('');
    setMenuInput({ name: '', price: 0, category: '' });
    setAddNewItemtoMenu(false);
  };

  const getRelevantOrders = status => {
    let tempWaitingOrders = [];
    if (path === 'Statistics') {
      for (let i = 0; i < tempTables.length; i++) {
        tempWaitingOrders.push(
          tempTables[i].orders.filter(order => order.status === status)
        );
      }
    } else if (path.includes('order_')) {
      tempWaitingOrders.push(
        tempTables[clickedTable].orders.filter(order => order.status === status)
      );
    }

    const waitingOrders = tempWaitingOrders.flat(1);

    waitingOrders.sort((a, b) => a.time.getTime() - b.time.getTime());

    let ordersDetailsArray = [];
    for (let i = 0; i < waitingOrders.length; i++) {
      ordersDetailsArray.push([
        waitingOrders[i].name,
        waitingOrders[i].table,
        waitingOrders[i].time.getTime(),
        waitingOrders[i].status
      ]);
    }
    return ordersDetailsArray;
  };

  const enumerateOrders = relevantOrders => {
    let orderNamesArr = [];
    for (let i = 0; i < relevantOrders.length; i++) {
      orderNamesArr.push(relevantOrders[i][0]);
    }

    let count = {};
    orderNamesArr.forEach(i => {
      count[i] = (count[i] || 0) + 1;
    });
    let arrCount = Object.entries(count);
    arrCount.sort();
    return arrCount;
  };

  return (
    <div className="App">
      <Navigation
        setNavActive={setNavActive}
        navActive={navActive}
        resetWhenChangingPath={resetWhenChangingPath}
        setPath={setPath}
      />
      {path === 'tables' ? (
        <Tables
          clickedTable={clickedTable}
          setClickedTable={setClickedTable}
          clickCount={clickCount}
          setClickCount={setClickCount}
          setTempTables={setTempTables}
          tempTables={tempTables}
          path={path}
          setPath={setPath}
        />
      ) : path.includes(`order_`) ? (
        <Orders
          tempMenu={tempMenu}
          setTempMenu={setTempMenu}
          path={path}
          enumerateOrders={enumerateOrders}
          getRelevantOrders={getRelevantOrders}
          categoryActive={categoryActive}
          setCategoryActive={setCategoryActive}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          menuSearch={menuSearch}
          setMenuSearch={setMenuSearch}
          logTables={logTables}
          setLogTables={setLogTables}
          tempTables={tempTables}
          clickedTable={clickedTable}
          setTempTables={setTempTables}
        />
      ) : path.includes('customize') ? (
        <CustomizeMenu
          tempMenu={tempMenu}
          setTempMenu={setTempMenu}
          path={path}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          menuSearch={menuSearch}
          clickedTable={clickedTable}
          tempTables={tempTables}
          setMenuSearch={setMenuSearch}
          categoryActive={categoryActive}
          setCategoryActive={setCategoryActive}
          setTempTables={setTempTables}
          addNewItemtoMenu={addNewItemtoMenu}
          setAddNewItemtoMenu={setAddNewItemtoMenu}
          menuInput={menuInput}
          setMenuInput={setMenuInput}
        />
      ) : (
        <Statistics
          enumerateOrders={enumerateOrders}
          getRelevantOrders={getRelevantOrders}
          setTempTables={setTempTables}
          tempTables={tempTables}
          logTables={logTables}
        />
      )}
    </div>
  );
}

export default App;
