import React, {useEffect} from 'react';
import Menu from "../Menu/Menu";
import {tempMenu} from "../Menu/tempMenu";
import './Orders.css'
import RemoveMenu from "../RemoveMenu/RemoveMenu";

const Orders = ({tempTables, clickedTable, setTempTables}) => {
    let count = {};
    tempTables[clickedTable].orders.forEach((i) => {
        count[i] = (count[i] || 0) + 1;
    });
    let arrCount = Object.entries(count);

    const onClickMenu = ({name, price}) => {
        const updatedTempTables = [...tempTables];
        updatedTempTables[clickedTable].orders.push(name);
        updatedTempTables[clickedTable].total += price;
        setTempTables(updatedTempTables);
    };

    const onRemoveOrderedItem = ({name}) => {
        const updatedTempTables = [...tempTables];
        const indexOfOrderedItem = updatedTempTables[clickedTable].orders.indexOf(name[0]);
        updatedTempTables[clickedTable].orders.splice(indexOfOrderedItem, 1);
        let priceOfSelectedItem = 0;
        for (let i=0; i<tempMenu.length; i++)
            if (tempMenu[i].name === name[0]) {
                priceOfSelectedItem = tempMenu[i].price;
            }
        updatedTempTables[clickedTable].total -= priceOfSelectedItem;
        setTempTables(updatedTempTables);
    };

    const menuArray = tempMenu.map((item, i) => {
        return <Menu key={tempMenu[i].id} id={tempMenu[i].id} name={tempMenu[i].name} price={tempMenu[i].price} onClickMenu={onClickMenu}/>
    });

    const selectedMenuArr = arrCount.map((item, i)=> {
        return <RemoveMenu key={i} id={i} name={arrCount[i]} onRemoveOrderedItem={onRemoveOrderedItem} />
    });

        return (
            <div>
                <h1>This is da menu!</h1>
                <div className='menuArray'>
                    {menuArray}
                </div>
                <h1>{`Table ${tempTables[clickedTable].id} contains the following items: `}</h1>
                {selectedMenuArr}
                <p>{`For a total of ${tempTables[clickedTable].total}`}</p>
            </div>
        );
};

export default Orders;