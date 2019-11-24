import React from 'react';
import ToDoMenu from "../ToDoMenu/ToDoMenu";
import Scroll from "../Scroll";

const KitchenStuff = ({getRelevantOrders, onSetDone, clickSpecialItem, setClickSpecialItem}) => {

    const waitingArray = getRelevantOrders('waiting');

    const selectedMenuArr = waitingArray.map((item, i) => {
        return <ToDoMenu key={i} id={i} name={waitingArray[i][0]} table={waitingArray[i][1]} time={waitingArray[i][2]}
                         status={waitingArray[i][3]} comment={waitingArray[i][4]} onSetDone={onSetDone} setClickSpecialItem={setClickSpecialItem} clickSpecialItem={clickSpecialItem}/>
    });

    return (
        <div className='statisticsMain'>
            <div className='containerOfContainer'>
                <h3>Waiting list:</h3>
                <Scroll>
                    {selectedMenuArr}
                </Scroll>
            </div>
        </div>
    );
}

export default KitchenStuff;