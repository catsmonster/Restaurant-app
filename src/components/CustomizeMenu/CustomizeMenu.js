import React from 'react';
import {tempMenu} from "../Menu/tempMenu";

const CustomizeMenu = ({menuInput, setMenuInput, addNewItemtoMenu, setAddNewItemtoMenu}) => {
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
            tempMenu.push({id: lastKnownId + 1, name: menuInput.name, price: menuInput.price, category: menuInput.category});
            setAddNewItemtoMenu(false);
        } else {
            alert("Please enter correct dish details.");
        }
    };


    return (
        <div>
            <h2>Here you will be able to customize your menu</h2>
            {addNewItemtoMenu ?
            <div>
                <span>Please enter dish name:</span>
                <input type="text" onChange={(e) => {
                    let updatedInput = {...menuInput};
                    updatedInput.name = e.target.value;
                    setMenuInput(updatedInput);
                }}/>
                <span>Please enter dish price:</span>
                <input type="text" onChange={(e) => {
                    let updatedInput = {...menuInput};
                    updatedInput.price = Number(e.target.value);
                    setMenuInput(updatedInput);
                }}/>
                <span>Please enter a category</span>
                <input type="text" onChange={(e) => {
                    let updatedInput = {...menuInput};
                    updatedInput.category = e.target.value.toLowerCase();
                    setMenuInput(updatedInput);
                }}/>
                <button onClick={()=> updateMenu()}>Add dish</button>
            </div> :
                <div>
                    <button onClick={() => setAddNewItemtoMenu(true)}>Add a new menu item</button>
                </div>
            }
        </div>
    );
};

export default CustomizeMenu;