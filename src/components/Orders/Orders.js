import React, {useEffect} from 'react';
import Menu from "../Menu/Menu";
import {tempMenu} from "../Menu/tempMenu";
import './Orders.css'
import RemoveMenu from "../RemoveMenu/RemoveMenu";

const Orders = ({tempTables, clickedTable, requestChange, setRequestChange, setTempTables}) => {
    let count = {};
    tempTables[clickedTable].orders.forEach((i) => {
        count[i] = (count[i] || 0) + 1;
    });
    let arrCount = Object.entries(count);

    const onClickMenu = ({name, price}) => {
        const updatedTempTables = [...tempTables];
        updatedTempTables[clickedTable].orders.push(name);
        updatedTempTables[clickedTable].total += price;
        setTempTables(updatedTempTables)
    }

    const menuArray = tempMenu.map((item, i) => {
        return <Menu key={tempMenu[i].id} id={tempMenu[i].id} name={tempMenu[i].name} price={tempMenu[i].price} onClickMenu={onClickMenu}/>
    });

    const selectedMenuArr = arrCount.map((item, i)=> {
        return <RemoveMenu key={i} id={i} name={arrCount[i]} clickedTable={clickedTable} />
    });

    if (requestChange === false) {
        return (
            <div>
                <h1>This is da menu!</h1>
                <div className='menuArray'>
                    {menuArray}
                </div>
                <h1>{`Table ${tempTables[clickedTable].id} contains the following items: `}</h1>
                <p>{arrCount.flat(1).join(' ')}</p>
                <button onClick={()=> setRequestChange(true)}>Update order</button>
                <p>{`For a total of ${tempTables[clickedTable].total}`}</p>
            </div>
        );
    } else {
        return (
            <div>
                {selectedMenuArr}
                <p>{arrCount.flat(1).join(' ')}</p>
                <button onClick={()=> setRequestChange(false)}>Save Changes</button>
            </div>
        );
    }
};

export default Orders;