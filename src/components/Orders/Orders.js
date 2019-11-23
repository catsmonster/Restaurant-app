import React from 'react';
import './Orders.css'
import RemoveMenu from "../RemoveMenu/RemoveMenu";
import Scroll from "../Scroll";
import CategoriesWithMenu from "../Menu/CategoriesWithMenu";
import ReturnDelivered from "../ReturnDelivered/ReturnDelivered";
import ReturnPrepared from "../ReturnPrepared/ReturnPrepared";

const Orders = ({path, tempTables, clickedTable, setTempTables, logTables, setLogTables, setMenuSearch, menuSearch, selectedCategory, setSelectedCategory, categoryActive, setCategoryActive, getRelevantOrders, enumerateOrders, tempMenu, setTempMenu}) => {


    const waitingOrders = getRelevantOrders('waiting');
    const preparedOrders = getRelevantOrders('prepared');
    const activeOrders = waitingOrders.concat(preparedOrders);

    const arrCount = enumerateOrders(waitingOrders);
    const prepArrCount = enumerateOrders(preparedOrders);

    const onRemoveOrderedItem = ({name}, arg) => {
        const updatedTempTables = [...tempTables];
        const orderedItemsArr = updatedTempTables[clickedTable].orders;
        let indexOfOrderedItem = 0;
        if (arg === 'waiting') {
            indexOfOrderedItem = orderedItemsArr.findIndex((item) => item.name === name[0] && (item.status === 'waiting'));
            updatedTempTables[clickedTable].orders.splice(indexOfOrderedItem, 1);
        } else if (arg === 'delivered') {
            indexOfOrderedItem = orderedItemsArr.findIndex((item) => item.name === name[0] && (item.status === 'delivered'));
            updatedTempTables[clickedTable].orders[indexOfOrderedItem].status = 'returned';
        } else {
            indexOfOrderedItem = orderedItemsArr.findIndex((item) => item.name === name[0] && (item.status === 'prepared'));
            updatedTempTables[clickedTable].orders[indexOfOrderedItem].status = 'returned';
        }
        let priceOfSelectedItem = 0;
        for (let i=0; i<tempMenu.length; i++)
            if (tempMenu[i].name === name[0]) {
                priceOfSelectedItem = tempMenu[i].price;
            }
        updatedTempTables[clickedTable].total -= priceOfSelectedItem;
        if (updatedTempTables[clickedTable].total === 0) {
            updatedTempTables[clickedTable].tableActive = 'false';
            updatedTempTables[clickedTable].timeAdded = new Date();
        }
        setTempTables(updatedTempTables);
    };

    const selectedMenuArr = arrCount.map((item, i)=> {
        return <RemoveMenu key={i} id={i} name={arrCount[i]} onRemoveOrderedItem={onRemoveOrderedItem} />
    });

    const tempDeliveredOrders = getRelevantOrders('delivered');
    const deliveredOrders = enumerateOrders(tempDeliveredOrders);

    const deliveredOrdersArr = deliveredOrders.map((item, i)=> {
        return <ReturnDelivered key={i} id={i} name={deliveredOrders[i]} onRemoveOrderedItem={onRemoveOrderedItem} />
    });

    const preparedOrdersArr = prepArrCount.map((item, i)=> {
        return <ReturnPrepared key={i} id={i} name={prepArrCount[i]} onRemoveOrderedItem={onRemoveOrderedItem} />
    });

    const clearTable = () => {
        const updatedTempTable = [...tempTables];
        updatedTempTable[clickedTable] = {id: clickedTable, orders: [], total: 0, tableActive: 'false', timeAdded: new Date()};
        setTempTables(updatedTempTable);
    };

    const logTotal = () => {
        const totalWithTip = tempTables[clickedTable].total;
        const returnedItems = tempTables[clickedTable].orders.filter((order)=> order.status === 'returned');
        const updatedLogTables = {...logTables};
        updatedLogTables.total = logTables.total + totalWithTip;
        updatedLogTables.orders.push(returnedItems);
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
        <div className='statisticsMain'>
            <h1>This is da menu!</h1>
            <CategoriesWithMenu setTempTables={setTempTables} setCategoryActive={setCategoryActive} categoryActive={categoryActive} setMenuSearch={setMenuSearch} tempTables={tempTables} path={path} clickedTable={clickedTable} menuSearch={menuSearch} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} tempMenu={tempMenu} setTempMenu={setTempMenu}/>
            <h1>{`Table ${tempTables[clickedTable].id + 1} ordered the following items:`}</h1>
            <div className='menuArrayContainer'>
                <div className='selectedMenu'>
                    <h3>Waiting orders:</h3>
                    <Scroll>
                        {selectedMenuArr}
                    </Scroll>
                </div>
                <div className='selectedMenu'>
                    <h3>Ready for delivery:</h3>
                    <Scroll>
                        {preparedOrdersArr}
                    </Scroll>
                </div>
                <div className='selectedMenu'>
                    <h3>Orders delivered:</h3>
                    <Scroll>
                        {deliveredOrdersArr}
                    </Scroll>
                </div>
            </div>
            <p>{`For a total of ${tempTables[clickedTable].total}`}</p>
            <button className='addTable' onClick={()=> {
                if (activeOrders.length > 0) {
                    alert('Table has not yet received all orders!')
                } else {
                    tipChange()
                }
            }}>Checkout and add a custom tip</button>
            <button className='addTable' onClick={()=> {
                if (activeOrders.length > 0) {
                    alert('Table has not yet received all orders!')
                } else {
                    tipChangeTen()
                }
            }}>Checkout and add 10% tip</button>
        </div>
    );
};

export default Orders;