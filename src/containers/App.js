import React, {useState} from 'react';
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
  const [tempTables, setTempTables] = useState([{
    id: 0,
    orders: [],
    total: 0
  }]);

  return (
      <div className="App">
        <Navigation setPath={setPath} />
        {path === 'tables' ?
            <Tables clickedTable={clickedTable} setClickedTable={setClickedTable} clickCount={clickCount} setClickCount={setClickCount} setTempTables={setTempTables} tempTables={tempTables} path={path} setPath={setPath}/>
            : path.includes(`order_`) ?
                <Orders tempTables={tempTables} clickedTable={clickedTable} setTempTables={setTempTables}/> :
                <Statistics tempTalbes={tempTables}/>
        }
      </div>
  );
}

export default App;
