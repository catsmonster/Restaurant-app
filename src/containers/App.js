import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from "../components/Navigation/Navigation";
import Tables from "../components/Tables/Tables";
import Orders from "../components/Orders/Orders";
import Statistics from "../components/Statistics/Statistics";

function App() {
  /*const [tables, setTables] = useState([]);*/
  const [clickCount, setClickCount] = useState(1);
  const [path, setPath] = useState('tables');
  const [clickedTable, setClickedTable] = useState(0);
  const [logTables, setLogTables] = useState({orders: [], total: 0});
  const [tempTables, setTempTables] = useState([{
    id: 0,
    orders: [],
    total: 0,
    tableActive: false,
    timeAdded: new Date()
  }]);

    useEffect(()=> {
        const updatedLogTables = {...logTables};
        let allOrders = [];
        for (let i = 0; i < tempTables.length; i++) {
            allOrders = allOrders.concat(tempTables[i].orders);
        }
        updatedLogTables.orders = allOrders;
        setLogTables(updatedLogTables);
    },[tempTables]);

  return (
      <div className="App">
        <Navigation setPath={setPath} />
        {path === 'tables' ?
            <Tables clickedTable={clickedTable} setClickedTable={setClickedTable} clickCount={clickCount} setClickCount={setClickCount} setTempTables={setTempTables} tempTables={tempTables} path={path} setPath={setPath}/>
            : path.includes(`order_`) ?
                <Orders logTables={logTables} setLogTables={setLogTables} tempTables={tempTables} clickedTable={clickedTable} setTempTables={setTempTables}/> :
                <Statistics setLogTables={setLogTables} tempTables={tempTables} logTables={logTables}/>
        }
      </div>
  );
}

export default App;
