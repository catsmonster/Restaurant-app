import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', maxHeight: '250px', margin: '1%' }}>
            {props.children}
        </div>
    );
}

export default Scroll;