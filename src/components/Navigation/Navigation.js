import React from 'react';
import './Navigation.css';

const Navigation = ({setPath, resetWhenChangingPath, setNavActive, navActive}) => {

    return (
            <ul className='NavUl'>
                <li className={`NavLi ${navActive===0 ? 'navActive' : ''}`} onClick={()=> {setPath('tables'); resetWhenChangingPath(); setNavActive(0);}}>Tables</li>
                <li className={`NavLi ${navActive===1 ? 'navActive' : ''}`} onClick={()=> {setPath('kitchen'); resetWhenChangingPath(); setNavActive(1);}}>Kitchen Stuff</li>
                <li className={`NavLi ${navActive===2 ? 'navActive' : ''}`} onClick={()=> {setPath('waiters'); resetWhenChangingPath(); setNavActive(2);}}>Waiters</li>
                <li className={`NavLi ${navActive===3 ? 'navActive' : ''}`} onClick={()=> {setPath('customize'); resetWhenChangingPath(); setNavActive(3);}}>Customize menu</li>
                <li className={`NavLi ${navActive===4 ? 'navActive' : ''}`} onClick={()=> {setPath('Statistics'); resetWhenChangingPath(); setNavActive(4);}}>Management</li>
            </ul>
        );

};

export default Navigation;