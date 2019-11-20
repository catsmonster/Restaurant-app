import React from 'react';
import './Navigation.css';

const Navigation = ({setPath, resetCategoriesState, setNavActive, navActive}) => {

    return (
            <ul className='NavUl'>
                <li className={`NavLi ${navActive===0 ? 'navActive' : ''}`} onClick={()=> {setPath('tables'); resetCategoriesState(); setNavActive(0);}}>Tables</li>
                <li className={`NavLi ${navActive===1 ? 'navActive' : ''}`} onClick={()=> {setPath('Statistics'); resetCategoriesState(); setNavActive(1);}}>Manage Orders</li>
                <li className={`NavLi ${navActive===2 ? 'navActive' : ''}`} onClick={()=> {setPath('customize'); resetCategoriesState(); setNavActive(2);}}>Customize menu</li>
            </ul>
        );

};

export default Navigation;