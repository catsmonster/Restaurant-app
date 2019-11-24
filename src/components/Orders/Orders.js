import React from 'react';
import './Orders.css'
import RemoveMenu from "../RemoveMenu/RemoveMenu";
import Scroll from "../Scroll";
import CategoriesWithMenu from "../Menu/CategoriesWithMenu";
import ReturnDelivered from "../ReturnDelivered/ReturnDelivered";
import ReturnPrepared from "../ReturnPrepared/ReturnPrepared";
import SpecialOrders from "../SpecialOrders/SpecialOrders";

const Orders = ({path, tempTables, clickedTable, setTempTables, logTables, setLogTables, setMenuSearch, menuSearch, selectedCategory, setSelectedCategory, categoryActive, setCategoryActive, getRelevantOrders, enumerateOrders, tempMenu, setTempMenu, clickMenuItem, setClickMenuItem, clickSpecialItem, setClickSpecialItem}) => {


    const waitingOrders = getRelevantOrders('waiting', false);
    const preparedOrders = getRelevantOrders('prepared', false);
    const activeOrders = waitingOrders.concat(preparedOrders);

    const specialWaitingOrders = getRelevantOrders('waiting', true);
    const specialPreparedOrders = getRelevantOrders('prepared', true);
    const specialDeliveredOrders = getRelevantOrders('delivered', true);


    const arrCount = enumerateOrders(waitingOrders);
    const prepArrCount = enumerateOrders(preparedOrders);

    const onRemoveOrderedItem = ({name}, status) => {
        const updatedTempTables = [...tempTables];
        const orderedItemsArr = updatedTempTables[clickedTable].orders;
        let indexOfOrderedItem = 0;
        if (status === 'waiting') {
            indexOfOrderedItem = orderedItemsArr.findIndex((item) => item.name === name[0] && (item.status === 'waiting') && (item.comments.length === 0));
            updatedTempTables[clickedTable].orders.splice(indexOfOrderedItem, 1);
        } else if (status === 'delivered') {
            indexOfOrderedItem = orderedItemsArr.findIndex((item) => item.name === name[0] && (item.status === 'delivered') && (item.comments.length === 0));
            updatedTempTables[clickedTable].orders[indexOfOrderedItem].status = 'returned';
        } else {
            indexOfOrderedItem = orderedItemsArr.findIndex((item) => item.name === name[0] && (item.status === 'prepared') && (item.comments.length === 0));
            updatedTempTables[clickedTable].orders[indexOfOrderedItem].status = 'returned';
        }
        let priceOfSelectedItem = 0;
        const activeTempMenu = tempMenu.filter((item) => item.active === true);
        for (let i=0; i<activeTempMenu.length; i++)
            if (activeTempMenu[i].name === name[0]) {
                priceOfSelectedItem = activeTempMenu[i].price;
            }
        decrementPriceFromTable(priceOfSelectedItem);
        setTempTables(updatedTempTables);
    };

    const onRemoveSpecialItem = ({time, status, price}) => {
        const updatedTempTables = [...tempTables];
        const orderedItemsArr = updatedTempTables[clickedTable].orders;
        let indexOfOrderedItem = 0;
        if (status === 'waiting') {
            indexOfOrderedItem = orderedItemsArr.findIndex((item) => item.time.getTime() === time);
            updatedTempTables[clickedTable].orders.splice(indexOfOrderedItem, 1);
        } else {
            indexOfOrderedItem = orderedItemsArr.findIndex((item) => item.time.getTime() === time);
            updatedTempTables[clickedTable].orders[indexOfOrderedItem].status = 'returned';
        }
        decrementPriceFromTable(price);
        setTempTables(updatedTempTables);

    };

    const decrementPriceFromTable = (price) => {
        const updatedTempTables = [...tempTables];
        updatedTempTables[clickedTable].total -= price;
        if (updatedTempTables[clickedTable].total === 0 && updatedTempTables[clickedTable].orders.length === 0) {
            updatedTempTables[clickedTable].tableActive = 'false';
            updatedTempTables[clickedTable].timeAdded = new Date();
        }
        setTempTables(updatedTempTables);
    };

    const selectedMenuArr = arrCount.map((item, i)=> {
        return <RemoveMenu key={i} id={i} name={arrCount[i]} onRemoveOrderedItem={onRemoveOrderedItem} />
    });

    const tempDeliveredOrders = getRelevantOrders('delivered', false);
    const deliveredOrders = enumerateOrders(tempDeliveredOrders);

    const deliveredOrdersArr = deliveredOrders.map((item, i)=> {
        return <ReturnDelivered key={i} id={i} name={deliveredOrders[i]} onRemoveOrderedItem={onRemoveOrderedItem} />
    });

    const preparedOrdersArr = prepArrCount.map((item, i)=> {
        return <ReturnPrepared key={i} id={i} name={prepArrCount[i]} onRemoveOrderedItem={onRemoveOrderedItem} />
    });

    const waitingSpecialOrdersArr = specialWaitingOrders.map((item, i)=> {
        return <SpecialOrders key={i} id={i} name={specialWaitingOrders[i][0]} time={specialWaitingOrders[i][2]} status={specialWaitingOrders[i][3]} comment={specialWaitingOrders[i][4]} price={specialWaitingOrders[i][5]} clickSpecialItem={clickSpecialItem} setClickSpecialItem={setClickSpecialItem} onRemoveSpecialItem={onRemoveSpecialItem}/>
    });

    const preparedSpecialOrdersArr = specialPreparedOrders.map((item, i)=> {
        return <SpecialOrders key={i} id={i} name={specialPreparedOrders[i][0]} time={specialPreparedOrders[i][2]} status={specialPreparedOrders[i][3]} comment={specialPreparedOrders[i][4]} price={specialPreparedOrders[i][5]} clickSpecialItem={clickSpecialItem} setClickSpecialItem={setClickSpecialItem} onRemoveSpecialItem={onRemoveSpecialItem}/>
    });

    const deliveredSpecialOrdersArr = specialDeliveredOrders.map((item, i)=> {
        return <SpecialOrders key={i} id={i} name={specialDeliveredOrders[i][0]} time={specialDeliveredOrders[i][2]} status={specialDeliveredOrders[i][3]} comment={specialDeliveredOrders[i][4]} price={specialDeliveredOrders[i][5]} clickSpecialItem={clickSpecialItem} setClickSpecialItem={setClickSpecialItem} onRemoveSpecialItem={onRemoveSpecialItem}/>
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
            <CategoriesWithMenu clickMenuItem={clickMenuItem} setClickMenuItem={setClickMenuItem} setTempTables={setTempTables} setCategoryActive={setCategoryActive} categoryActive={categoryActive} setMenuSearch={setMenuSearch} tempTables={tempTables} path={path} clickedTable={clickedTable} menuSearch={menuSearch} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} tempMenu={tempMenu} setTempMenu={setTempMenu}/>
            <h1>{`Table ${tempTables[clickedTable].id + 1} ordered the following items:`}</h1>
            <div className='menuArrayContainer'>
                <div className='selectedMenu'>
                    <h3>Waiting orders:</h3>
                    <Scroll>
                        {selectedMenuArr}
                        {waitingSpecialOrdersArr}
                    </Scroll>
                </div>
                <div className='selectedMenu'>
                    <h3>Ready for delivery:</h3>
                    <Scroll>
                        {preparedOrdersArr}
                        {preparedSpecialOrdersArr}
                    </Scroll>
                </div>
                <div className='selectedMenu'>
                    <h3>Orders delivered:</h3>
                    <Scroll>
                        {deliveredOrdersArr}
                        {deliveredSpecialOrdersArr}
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