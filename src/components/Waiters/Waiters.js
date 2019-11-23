import React from 'react';
import ToDoMenu from "../ToDoMenu/ToDoMenu";
import Scroll from "../Scroll";

const Waiters = ({getRelevantOrders, onSetDone}) => {

    const deliveredArray = getRelevantOrders('prepared');

    const deliveredMenuArr = deliveredArray.map((item, i)=> {
        return <ToDoMenu key={i} id={i} name={deliveredArray[i][0]} table={deliveredArray[i][1]} time={deliveredArray[i][2]} onSetDone={onSetDone} />
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