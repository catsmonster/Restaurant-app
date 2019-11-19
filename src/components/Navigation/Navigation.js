import React from 'react';
import './Navigation.css';

const Navigation = ({setPath, resetCategoriesState}) => {
    return (
            <ul className='NavUl'>
                <li className='NavLi' onClick={()=> {setPath('tables'); resetCategoriesState();}}>Tables</li>
                <li className='NavLi' onClick={()=> {setPath('Statistics'); resetCategoriesState();}}>Statistics</li>
                <li className='NavLi' onClick={()=> {setPath('customize'); resetCategoriesState();}}>Customize menu</li>
            </ul>
        );

};

export default Navigation;