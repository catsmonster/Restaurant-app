import React from 'react';
import {tempMenu} from "../Menu/tempMenu";
import './CustomizeMenu.css'
import CategoriesWithMenu from "../Menu/CategoriesWithMenu";

const CustomizeMenu = ({menuInput, setMenuInput, addNewItemtoMenu, setAddNewItemtoMenu, setTempTables, setCategoryActive, categoryActive, setMenuSearch, tempTables, path, clickedTable, menuSearch, selectedCategory, setSelectedCategory}) => {
    const updateMenu = () => {
        let existingItems = [];
        for (let i=0; i<tempMenu.length; i++) {
            existingItems.push(tempMenu[i].name.toLowerCase());
        }
        let lastKnownId = tempMenu[tempMenu.length - 1].id;
        if (menuInput.name.length > 0 && !isNaN(Number(menuInput.price)) && menuInput.category.length > 0) {
            if (existingItems.includes(menuInput.name.toLowerCase())) {
                return alert(`The dish ${menuInput.name} already exists, please enter a unique dish name`);
            }
            tempMenu.push({id: lastKnownId + 1, name: menuInput.name, price: menuInput.price, category: menuInput.category, active: true});
            setAddNewItemtoMenu(false);
        } else {
            alert("Please enter correct dish details.");
        }
    };


    return (
        <div>
            <h2>Here you will be able to customize your menu</h2>
            {addNewItemtoMenu ?
            <div className='addDish'>
                <span>Please enter dish name:</span>
                <input type="text" onChange={(e) => {
                    let updatedInput = {...menuInput};
                    updatedInput.name = e.target.value;
                    setMenuInput(updatedInput);
                }}/>
                <span>Please enter dish price:</span>
                <input type="text" onChange={(e) => {
                    let updatedInput = {...menuInput};
                    updatedInput.price = Math.abs(Number(e.target.value));
                    setMenuInput(updatedInput);
                }}/>
                <span>Please enter a category</span>
                <input type="text" onChange={(e) => {
                    let updatedInput = {...menuInput};
                    updatedInput.category = e.target.value.toLowerCase();
                    setMenuInput(updatedInput);
                }}/>
                <button className='addTable' onClick={()=> updateMenu()}>Add dish</button>
                <CategoriesWithMenu setTempTables={setTempTables} setCategoryActive={setCategoryActive} categoryActive={categoryActive} setMenuSearch={setMenuSearch} tempTables={tempTables} path={path} clickedTable={clickedTable} menuSearch={menuSearch} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            </div> :
                <div>
                    <CategoriesWithMenu setTempTables={setTempTables} setCategoryActive={setCategoryActive} categoryActive={categoryActive} setMenuSearch={setMenuSearch} tempTables={tempTables} path={path} clickedTable={clickedTable} menuSearch={menuSearch} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                    <button className='addTable' onClick={() => setAddNewItemtoMenu(true)}>Add a new menu item</button>
                </div>
            }
        </div>
    );
};

export default CustomizeMenu;