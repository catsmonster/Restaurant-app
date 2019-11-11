import React, {useState} from 'react';
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
  const [clickedItem, setClickedItem] = useState(0);
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
        <Tables setClickedItem={setClickedItem} clickCount={clickCount} setClickCount={setClickCount} setTempTables={setTempTables} tempTables={tempTables} path={path} setPath={setPath}/>
        : path.includes(`order_`) ?
        <Orders tempTables={tempTables} clickedItem={clickedItem}/> :
        <Statistics/>
        }
    </div>
  );
}

export default App;
