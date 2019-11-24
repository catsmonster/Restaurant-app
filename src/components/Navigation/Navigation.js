import React from 'react';
import './Navigation.css';

const Navigation = ({setPath, resetWhenChangingPath, setNavActive, navActive, openNav, setOpenNav}) => {

    const addClass = () => {
        if (openNav) {
            return 'change';
        } else {
            return '';
        }
    };

    const burgerKing = (
        <div className='burgerPosition'>
            <div className={`burgerContainer ${addClass()}`} onClick={()=> {
                setOpenNav(!openNav);
            }}>
                <div className={`bar1`}></div>
                <div className={`bar2`}></div>
                <div className={`bar3`}></div>
            </div>
        </div>
    );

    return (
        <div>
            {openNav ?
            <div>
                <div>
                    {burgerKing}
                </div>
                <ul className='NavUl'>
                    <li className={`NavLi ${navActive===0 ? 'navActive' : ''}`} onClick={()=> {setPath('tables'); resetWhenChangingPath(); setNavActive(0);}}>Tables</li>
                    <li className={`NavLi ${navActive===1 ? 'navActive' : ''}`} onClick={()=> {setPath('kitchen'); resetWhenChangingPath(); setNavActive(1);}}>Kitchen Stuff</li>
                    <li className={`NavLi ${navActive===2 ? 'navActive' : ''}`} onClick={()=> {setPath('waiters'); resetWhenChangingPath(); setNavActive(2);}}>Waiters</li>
                    <li className={`NavLi ${navActive===3 ? 'navActive' : ''}`} onClick={()=> {setPath('customize'); resetWhenChangingPath(); setNavActive(3);}}>Customize menu</li>
                    <li className={`NavLi ${navActive===4 ? 'navActive' : ''}`} onClick={()=> {setPath('Statistics'); resetWhenChangingPath(); setNavActive(4);}}>Management</li>
                </ul>
            </div> :
              <div>
                  {burgerKing}
              </div>
            }
        </div>
        );

};

export default Navigation;