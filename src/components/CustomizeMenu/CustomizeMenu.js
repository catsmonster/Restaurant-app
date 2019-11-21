import React from 'react';
import './CustomizeMenu.css'
import CategoriesWithMenu from "../Menu/CategoriesWithMenu";

const CustomizeMenu = ({menuInput, setMenuInput, addNewItemtoMenu, setAddNewItemtoMenu, setTempTables, setCategoryActive, categoryActive, setMenuSearch, tempTables, path, clickedTable, menuSearch, selectedCategory, setSelectedCategory, tempMenu, setTempMenu}) => {
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
        <div className='statisticsMain'>
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
                <h3>Click a menu item to remove it from the menu - This will not affect history</h3>
                <CategoriesWithMenu setTempTables={setTempTables} setCategoryActive={setCategoryActive} categoryActive={categoryActive} setMenuSearch={setMenuSearch} tempTables={tempTables} path={path} clickedTable={clickedTable} menuSearch={menuSearch} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setTempMenu={setTempMenu} tempMenu={tempMenu}/>
            </div> :
                <div>
                    <h3>Click a menu item to remove it from the menu - This will not affect history</h3>
                    <CategoriesWithMenu setTempTables={setTempTables} setCategoryActive={setCategoryActive} categoryActive={categoryActive} setMenuSearch={setMenuSearch} tempTables={tempTables} path={path} clickedTable={clickedTable} menuSearch={menuSearch} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} tempMenu={tempMenu} setTempMenu={setTempMenu}/>
                    <button className='addTable' onClick={() => setAddNewItemtoMenu(true)}>Add a new menu item</button>
                </div>
            }
        </div>
    );
};

export default CustomizeMenu;