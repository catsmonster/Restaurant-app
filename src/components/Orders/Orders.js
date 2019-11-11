import React, {useEffect} from 'react';
import Menu from "../Menu/Menu";
import {tempMenu} from "../Menu/tempMenu";
import './Orders.css'

const Orders = ({tempTables, clickedTable}) => {
    let count = {};
    tempTables[clickedTable].orders.forEach((i)=> { count[i] = (count[i]||0) + 1;});
    let arrCount = Object.entries(count);
    const menuArray = tempMenu.map((item, i) => {
        return <Menu key={tempMenu[i].id} id={tempMenu[i].id} name={tempMenu[i].name} price={tempMenu[i].price} clickedTable={clickedTable}/>
    });


    return (
      <div>
          <h1>This is da menu!</h1>
          <div className='menuArray'>
              {menuArray}
          </div>
          <h1>{`Table ${tempTables[clickedTable].id} contains the following items: `}</h1>
            <p>{arrCount.flat(1).join(' ')}</p>
            <p>{`For a total of ${tempTables[clickedTable].total}`}</p>
      </div>
    );
};

export default Orders;