import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from "../components/Navigation/Navigation";
import Tables from "../components/Tables/Tables";
import Orders from "../components/Orders/Orders";
import Statistics from "../components/Statistics/Statistics";
import {tempTables} from '../components/tempTables';

function App() {
  /*const [tables, setTables] = useState([]);*/
  const [clickCount, setClickCount] = useState(1);
  const [path, setPath] = useState('tables');
  const [clickedTable, setClickedTable] = useState(0);
  const [requestChange, setRequestChange] = useState(false);
  /*const [tempTables, setTempTables] = useState([{
    id: 0,
    orders: [],
    total: 0
  }]);
  */


  const setTempTables = () => {
    tempTables.push({
      id: clickCount,
      orders: [],
      total: 0
    })
  };

/*  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setTables(users));
  }, [setTables]);

  */
  return (
    <div className="App">
      <Navigation setPath={setPath} />
        {path === 'tables' ?
        <Tables setClickedTable={setClickedTable} clickCount={clickCount} setClickCount={setClickCount} setTempTables={setTempTables} tempTables={tempTables} path={path} setPath={setPath}/>
        : path.includes(`order_`) ?
        <Orders requestChange={requestChange} setRequestChange={setRequestChange} tempTables={tempTables} clickedTable={clickedTable}/> :
        <Statistics/>
        }
    </div>
  );
}

export default App;
