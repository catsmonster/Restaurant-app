import React from 'react';
import './Navigation.css';

const Navigation = ({setPath}) => {
    return (
            <ul>
                <li onClick={()=> setPath('tables')}>Tables</li>
                <li onClick={()=> setPath('Statistics')}>Statistics</li>
            </ul>
        );

};

export default Navigation;