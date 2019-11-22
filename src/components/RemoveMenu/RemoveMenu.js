import React from 'react';

const RemoveMenu = ({ order, onRemoveOrderedItem }) => {
  return (
    <div className="foodContainer">
      <button
        className="deleteBtn"
        onClick={() => onRemoveOrderedItem(order)}
      ></button>
      <span>{`${order.count} ${order.count === 1 ? 'plate' : 'plates'} of ${
        order.name
      }`}</span>
    </div>
  );
};

export default RemoveMenu;
