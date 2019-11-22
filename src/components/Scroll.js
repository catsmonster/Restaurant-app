import React from 'react';

const Scroll = props => {
  return (
    <div
      className="menuList"
      style={{ overflowY: 'scroll', maxHeight: '250px', margin: '1%' }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
