import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from "../components/Navigation/Navigation";
import Tables from "../components/Tables/Tables";
import Orders from "../components/Orders/Orders";
import Statistics from "../components/Statistics/Statistics";
import CustomizeMenu from "../components/CustomizeMenu/CustomizeMenu";

function App() {
  /*const [tables, setTables] = useState([]);*/
  const [clickCount, setClickCount] = useState(1);
  const [path, setPath] = useState('tables');
  const [clickedTable, setClickedTable] = useState(0);
  const [logTables, setLogTables] = useState({orders: [], total: 0});
  const [menuSearch, setMenuSearch] = useState('');
  const [menuInput, setMenuInput] = useState({name: '', price: 0, category: ''});
  const [addNewItemtoMenu, setAddNewItemtoMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categoryActive, setCategoryActive] = useState(0);
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
    }, [tempTables]);

    const resetCategoriesState = () => {
        setCategoryActive(0);
        setSelectedCategory('All');
        setMenuSearch('');
    };


  return (
      <div className="App">
        <Navigation resetCategoriesState={resetCategoriesState} setPath={setPath} />
        {path === 'tables' ?
            <Tables clickedTable={clickedTable} setClickedTable={setClickedTable} clickCount={clickCount} setClickCount={setClickCount} setTempTables={setTempTables} tempTables={tempTables} path={path} setPath={setPath}/>
            : path.includes(`order_`) ?
                <Orders categoryActive={categoryActive} setCategoryActive={setCategoryActive} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} menuSearch={menuSearch} setMenuSearch={setMenuSearch} logTables={logTables} setLogTables={setLogTables} tempTables={tempTables} clickedTable={clickedTable} setTempTables={setTempTables}/> : path.includes('customize') ?
                <CustomizeMenu addNewItemtoMenu={addNewItemtoMenu} setAddNewItemtoMenu={setAddNewItemtoMenu} menuInput={menuInput} setMenuInput={setMenuInput} /> :
                <Statistics setLogTables={setLogTables} tempTables={tempTables} logTables={logTables}/>
        }
      </div>
  );
}

export default App;
