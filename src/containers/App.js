import React, {useState} from 'react';
import './App.css';
import Navigation from "../components/Navigation/Navigation";
import Tables from "../components/Tables/Tables";
import Orders from "../components/Orders/Orders";
import Statistics from "../components/Statistics/Statistics";
import CustomizeMenu from "../components/CustomizeMenu/CustomizeMenu";
import KitchenStuff from "../components/KitchenStuff/KitchenStuff";
import Waiters from "../components/Waiters/Waiters";

function App() {
    /*const [tables, setTables] = useState([]);*/
    const [clickCount, setClickCount] = useState(1);
    const [path, setPath] = useState('tables');
    const [clickedTable, setClickedTable] = useState(0);
    const [logTables, setLogTables] = useState({orders: [], total: 0, waiting: 0, prepared: 0, delivered: 0});
    const [menuSearch, setMenuSearch] = useState('');
    const [menuInput, setMenuInput] = useState({name: '', price: 0, category: ''});
    const [addNewItemtoMenu, setAddNewItemtoMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [categoryActive, setCategoryActive] = useState(0);
    const [navActive, setNavActive] = useState(0);
    const [clickedOnDelivered, setClickedOnDelivered] = useState(false);
    const [clickMenuItem, setClickMenuItem] = useState({status: 'false', toggle: false});
    const [clickSpecialItem, setClickSpecialItem] = useState('false');
    const [openNav, setOpenNav] = useState(false);
    const [expandTableOrders, setExpandTableOrders] = useState({status: 'false', toggle: false});
    const [tempTables, setTempTables] = useState([{
        id: 0,
        orders: [],
        total: 0,
        tableActive: 'false',
        timeAdded: new Date()
    }]);
    const [tempMenu, setTempMenu] = useState([{
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
        }]);


    const resetWhenChangingPath = () => {
        setCategoryActive(0);
        setSelectedCategory('All');
        setMenuSearch('');
        setMenuInput({name: '', price: 0, category: ''});
        setAddNewItemtoMenu(false);
        const updatedClickMenuItem = {...clickMenuItem};
        updatedClickMenuItem.status = 'false';
        updatedClickMenuItem.toggle = false;
        setClickMenuItem(updatedClickMenuItem);
        setClickSpecialItem('false');
        setOpenNav(false);
        const updateExpandable = {...expandTableOrders};
        updateExpandable.status = 'false';
        updateExpandable.toggle = false;
        setExpandTableOrders(updateExpandable);
    };

    const getRelevantOrders = (status, special) => {
        let tempWaitingOrders = [];
        if (path === 'waiters' || path === 'kitchen') {
            for (let i=0; i<tempTables.length; i++) {
                tempWaitingOrders.push(tempTables[i].orders.filter((order) => order.status === status));
            }
        } else if (path.includes('order_')) {
            const normalOrders = tempTables[clickedTable].orders.filter((order) => order.status === status && (order.comments.length === 0));
            const customOrders = tempTables[clickedTable].orders.filter((order)=> order.status === status && order.comments.length > 0);
            if (special) {
                tempWaitingOrders.push(customOrders);
            } else {
                tempWaitingOrders.push(normalOrders);
            }
        }

        const waitingOrders = tempWaitingOrders.flat(1);

        waitingOrders.sort((a,b)=>a.time.getTime() - b.time.getTime());

        let ordersDetailsArray = [];
        for (let i=0; i<waitingOrders.length; i++) {
            ordersDetailsArray.push([waitingOrders[i].name, waitingOrders[i].table, waitingOrders[i].time.getTime(), waitingOrders[i].status, waitingOrders[i].comments, waitingOrders[i].price]);
        }
        return ordersDetailsArray;
    };

    const enumerateOrders = (relevantOrders) => {
        let orderNamesArr = [];
        for (let i=0; i<relevantOrders.length; i++) {
            orderNamesArr.push(relevantOrders[i][0]);
        }

        let count = {};
        orderNamesArr.forEach((i) => {
            count[i] = (count[i] || 0) + 1;
        });
        let arrCount = Object.entries(count);
        arrCount.sort();
        return arrCount;
    };

    const onSetDone = ({time, table, status}) => {
        const updateTempTables = [...tempTables];
        const indexOfSelectedOrder = updateTempTables[table].orders.findIndex((order) => order.time.getTime() === time);
        if (status === 'waiting') {
            updateTempTables[table].orders[indexOfSelectedOrder].status = 'prepared';
        } else {
            updateTempTables[table].orders[indexOfSelectedOrder].status = 'delivered';
            const ordersDelivered = updateTempTables[table].orders.filter((order) => order.status === 'delivered');
            if (ordersDelivered.length === updateTempTables[table].orders.filter((order)=> order.status !== 'returned').length) {
                updateTempTables[table].tableActive = 'eating';
            }
        }
        setTempTables(updateTempTables);
    };

    return (
        <div className="App">
            <Navigation tempTables={tempTables} openNav={openNav} setOpenNav={setOpenNav} setNavActive={setNavActive} navActive={navActive} resetWhenChangingPath={resetWhenChangingPath} setPath={setPath} />
            {path === 'tables' ?
                <Tables clickedTable={clickedTable} setClickedTable={setClickedTable} clickCount={clickCount} setClickCount={setClickCount} setTempTables={setTempTables} tempTables={tempTables} path={path} setPath={setPath}/>
                : path.includes(`order_`) ?
                    <Orders expandTableOrders={expandTableOrders} setExpandTableOrders={setExpandTableOrders} setPath={setPath} clickSpecialItem={clickSpecialItem} setClickSpecialItem={setClickSpecialItem} clickMenuItem={clickMenuItem} setClickMenuItem={setClickMenuItem} clickedOnDelivered={clickedOnDelivered} setClickedOnDelivered={setClickedOnDelivered} tempMenu={tempMenu} setTempMenu={setTempMenu} path={path} enumerateOrders={enumerateOrders} getRelevantOrders={getRelevantOrders} categoryActive={categoryActive} setCategoryActive={setCategoryActive} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} menuSearch={menuSearch} setMenuSearch={setMenuSearch} logTables={logTables} setLogTables={setLogTables} tempTables={tempTables} clickedTable={clickedTable} setTempTables={setTempTables}/> : path.includes('customize') ?
                        <CustomizeMenu setClickMenuItem={setClickMenuItem} clickMenuItem={clickMenuItem} tempMenu={tempMenu} setTempMenu={setTempMenu} path={path} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} menuSearch={menuSearch} clickedTable={clickedTable} tempTables={tempTables} setMenuSearch={setMenuSearch} categoryActive={categoryActive} setCategoryActive={setCategoryActive} setTempTables={setTempTables} addNewItemtoMenu={addNewItemtoMenu} setAddNewItemtoMenu={setAddNewItemtoMenu} menuInput={menuInput} setMenuInput={setMenuInput} /> : path === 'Statistics' ?
                        <Statistics clickSpecialItem={clickSpecialItem} setClickSpecialItem={setClickSpecialItem} onSetDone={onSetDone} getRelevantOrders={getRelevantOrders} logTables={logTables}/> : path === 'kitchen' ?
                        <KitchenStuff clickSpecialItem={clickSpecialItem} setClickSpecialItem={setClickSpecialItem} onSetDone={onSetDone} getRelevantOrders={getRelevantOrders}/> :
                        <Waiters clickSpecialItem={clickSpecialItem} setClickSpecialItem={setClickSpecialItem} onSetDone={onSetDone} getRelevantOrders={getRelevantOrders}/>
            }
        </div>
    );
}

export default App;