import React from 'react';
import ToDoMenu from "../ToDoMenu/ToDoMenu";
import Scroll from "../Scroll";

const Waiters = ({getRelevantOrders, onSetDone, clickSpecialItem, setClickSpecialItem}) => {

    const deliveredArray = getRelevantOrders('prepared');

    const deliveredMenuArr = deliveredArray.map((item, i)=> {
        return <ToDoMenu key={i} id={i} name={deliveredArray[i][0]} table={deliveredArray[i][1]} time={deliveredArray[i][2]} status={deliveredArray[i][3]} comment={deliveredArray[i][4]} onSetDone={onSetDone} clickSpecialItem={clickSpecialItem} setClickSpecialItem={setClickSpecialItem} />
    });

    return (
        <div className='statisticsMain'>
            <div className='containerOfContainer'>
                <h3>Ready for delivery:</h3>
                <Scroll>
                    {deliveredMenuArr}
                </Scroll>
            </div>
        </div>
    );
};

export default Waiters;