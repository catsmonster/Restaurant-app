import React from 'react';
import './Navigation.css';

const Navigation = ({setPath}) => {
    return (
            <ul className='NavUl'>
                <li className='NavLi' onClick={()=> setPath('tables')}>Tables</li>
                <li className='NavLi' onClick={()=> setPath('Statistics')}>Statistics</li>
            </ul>
        );

};

export default Navigation;