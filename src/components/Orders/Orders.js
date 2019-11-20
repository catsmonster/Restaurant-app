import React from 'react';
import Menu from "../Menu/Menu";
import {tempMenu} from "../Menu/tempMenu";
import './Orders.css'
import RemoveMenu from "../RemoveMenu/RemoveMenu";
import SearchMenu from "../SearchMenu/SearchMenu";
import Scroll from "../Scroll";
import CategoryItem from "../CategoryItem/CategoryItem";

const Orders = ({tempTables, clickedTable, setTempTables, logTables, setLogTables, setMenuSearch, menuSearch, selectedCategory, setSelectedCategory, categoryActive, setCategoryActive, getRelevantOrders, enumerateOrders, path}) => {

    const waitingOrders = getRelevantOrders('waiting');
    const preparedOrders = getRelevantOrders('prepared');
    const ordersToDisplay = waitingOrders.concat(preparedOrders);

    const arrCount = enumerateOrders(ordersToDisplay);


    const onClickMenu = ({name, price}) => {
        const updatedTempTables = [...tempTables];
        updatedTempTables[clickedTable].orders.push({name: name, status: 'waiting', time: new Date(), table: clickedTable});
        updatedTempTables[clickedTable].total += price;
        updatedTempTables[clickedTable].tableActive = true;
        setTempTables(updatedTempTables);
    };

    const onClickCategory = ({name}) => {
        setSelectedCategory(name);
        setMenuSearch('');
    };

    const onRemoveOrderedItem = ({name}) => {
        const updatedTempTables = [...tempTables];
        const orderedItemsArr = updatedTempTables[clickedTable].orders;
        const indexOfOrderedItem = orderedItemsArr.findIndex((item) => item.name === name[0]);
        updatedTempTables[clickedTable].orders.splice(indexOfOrderedItem, 1);
        let priceOfSelectedItem = 0;
        for (let i=0; i<tempMenu.length; i++)
            if (tempMenu[i].name === name[0]) {
                priceOfSelectedItem = tempMenu[i].price;
            }
        updatedTempTables[clickedTable].total -= priceOfSelectedItem;
        if (updatedTempTables[clickedTable].total === 0) {
            updatedTempTables[clickedTable].tableActive = false;
            updatedTempTables[clickedTable].timeAdded = new Date();
        }
        setTempTables(updatedTempTables);
    };

    const menuOfSelectedCategory = tempMenu.filter((item) => {
        if (selectedCategory === 'All' && !menuSearch.length > 0) {
            return item;
        } else if (menuSearch.length > 0) {
            return item.name.toLowerCase().includes(menuSearch.toLowerCase());
        }
        return item.category === selectedCategory;
    });

    const menuArray = menuOfSelectedCategory.map((item, i) => {
        return <Menu key={menuOfSelectedCategory[i].id} id={menuOfSelectedCategory[i].id} name={menuOfSelectedCategory[i].name} price={menuOfSelectedCategory[i].price} onClickMenu={onClickMenu}/>
    });

    const selectedMenuArr = arrCount.map((item, i)=> {
        return <RemoveMenu key={i} id={i} name={arrCount[i]} onRemoveOrderedItem={onRemoveOrderedItem} />
    });

    const tempDeliveredOrders = getRelevantOrders('delivered');
    const deliveredOrders = enumerateOrders(tempDeliveredOrders);

    const deliveredOrdersArr = deliveredOrders.map((item, i)=> {
        return <RemoveMenu key={i} id={i} name={deliveredOrders[i]} onRemoveOrderedItem={onRemoveOrderedItem} />
    });

    const clearTable = () => {
        const updatedTempTable = [...tempTables];
        updatedTempTable[clickedTable] = {id: clickedTable, orders: [], total: 0, tableActive: false, timeAdded: new Date()};
        setTempTables(updatedTempTable);
    };

    const logTotal = () => {
        const totalWithTip = tempTables[clickedTable].total;
        const updatedLogTables = {...logTables};
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

    let allCategories = ['All'];
    for (let i=0; i<tempMenu.length; i++) {
        allCategories.push(tempMenu[i].category)
    }
    const uniqueCategories = [...new Set(allCategories)];

    const categoriesArray = uniqueCategories.map((item, i) => {
       return <CategoryItem categoryActive={categoryActive} setCategoryActive={setCategoryActive} onClickCategory={onClickCategory} key={i} id={i} name={item}/>
    });

        return (
            <div>
                <h1>This is da menu!</h1>
                <div className='menuArray'>
                    <Scroll>
                        {categoriesArray}
                    </Scroll>
                    <Scroll>
                        {menuArray}
                    </Scroll>
                </div>
                <div className='searchContainer'>
                    <span id='searchText'>Search menu item:</span>
                    <SearchMenu setMenuSearch={setMenuSearch}/>
                </div>
                <h1>{`Table ${tempTables[clickedTable].id + 1} ordered the following items:`}</h1>
                <div className='containerOfContainer'>
                    <div className='menuArrayContainer'>
                        <div>
                            <h3>Orders to be delivered:</h3>
                        </div>
                        <div className='selectedMenu'>
                            <Scroll>
                                {selectedMenuArr}
                            </Scroll>
                        </div>
                        <div>
                            <h3>Orders delivered:</h3>
                        </div>
                        <div className='selectedMenu'>
                            <Scroll>
                                {deliveredOrdersArr}
                            </Scroll>
                        </div>
                    </div>
                </div>
                <p>{`For a total of ${tempTables[clickedTable].total}`}</p>
                <button className='addTable' onClick={()=> {
                    tipChange()
                }}>Checkout and add a custom tip</button>
                <button className='addTable' onClick={()=> {
                    tipChangeTen()
                }}>Checkout and add 10% tip</button>
            </div>
        );
};

export default Orders;