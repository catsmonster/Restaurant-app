import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '3px solid black', maxHeight: '250px' }}>
            {props.children}
        </div>
    );
}

export default Scroll;