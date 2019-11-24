import React from 'react';
import Menu from "./Menu";
import CategoryItem from "../CategoryItem/CategoryItem";
import Scroll from "../Scroll";
import SearchMenu from "../SearchMenu/SearchMenu";

const CategoriesWithMenu = ({tempTables, clickedTable, setTempTables, path, setSelectedCategory, setMenuSearch, menuSearch, selectedCategory, categoryActive, setCategoryActive, tempMenu, setTempMenu, clickMenuItem, setClickMenuItem}) => {
    const onClickMenu = ({name, price, source, id}) => {
        if (path.includes('order_')) {
            const updatedTempTables = [...tempTables];
            if (source === 'add') {
                updatedTempTables[clickedTable].orders.push({name: name, status: 'waiting', time: new Date(), table: clickedTable, comments: [], price: price});
                updatedTempTables[clickedTable].total += price;
            } else if (source === 'addComment') {
                const commentInput = prompt('Enter your custom comment:');
                updatedTempTables[clickedTable].orders.push({name: name, status: 'waiting', time: new Date(), table: clickedTable, comments: [commentInput], price: price});
                updatedTempTables[clickedTable].total += price;
            } else if (source === 'addCustom') {
                const priceInput = Number(prompt('Enter your custom price:'));
                updatedTempTables[clickedTable].orders.push({name: name, status: 'waiting', time: new Date(), table: clickedTable, comments: [`custom price ${priceInput}`], price: priceInput});
                updatedTempTables[clickedTable].total += priceInput;
            } else if (source === 'addCustomComment') {
                const priceInput = Number(prompt('Enter your custom price:'));
                const commentInput = prompt('Enter your custom comment:');
                updatedTempTables[clickedTable].orders.push({name: name, status: 'waiting', time: new Date(), table: clickedTable, comments: [`custom price ${priceInput}`, commentInput], price: priceInput});
                updatedTempTables[clickedTable].total += priceInput;
            }
            updatedTempTables[clickedTable].tableActive = 'waiting';
            setTempTables(updatedTempTables);
        } else {
            const indexOfSelectedItem = tempMenu.findIndex((item) => item.id === id);
            const updateTempMenu = [...tempMenu];
            if (source === 'Remove') {
                updateTempMenu[indexOfSelectedItem].active = false;
            } else if (source === 'recover') {
                if (updateTempMenu.filter((item) => item.active === true && item.name === name).length > 0) {
                    alert('Unable to recover a dish with the same name as another active dish.')
                } else {
                    updateTempMenu[indexOfSelectedItem].active = true;
                }
            } else if (source === 'updateName') {
                let inputName = '';
                inputName = prompt('Please provide a new name for the dish');
                if (inputName) {
                    if (inputName.length > 0) {
                        while (tempMenu.filter((item) => item.name.toLowerCase() === inputName.toLowerCase()).length > 0) {
                            inputName = prompt('Given name already exists, please provide a unique new name');
                            if (inputName) {
                                if (inputName.length > 0) {
                                    inputName.toLowerCase();
                                }
                            } else {
                                return;
                            }
                        }
                    }
                } else {
                    return;
                }
                updateTempMenu[indexOfSelectedItem].active = false;
                updateTempMenu.push({
                    id: updateTempMenu.length + 1,
                    name: inputName,
                    price: updateTempMenu[indexOfSelectedItem].price,
                    category: updateTempMenu[indexOfSelectedItem].category,
                    active: true
                });
            } else if (source === 'updatePrice') {
                let inputPrice = null;
                inputPrice = Number(prompt('Please provide a new price for the dish'));
                if (inputPrice) {
                    while (isNaN(inputPrice) || inputPrice === 0) {
                        inputPrice = Number(prompt('Please provide a valid price for the dish'));
                    }
                } else {
                    return;
                }
                updateTempMenu[indexOfSelectedItem].active = false;
                updateTempMenu.push({
                    id: updateTempMenu.length + 1,
                    name: updateTempMenu[indexOfSelectedItem].name,
                    price: inputPrice,
                    category: updateTempMenu[indexOfSelectedItem].category,
                    active: true
                });
            } else if (source === 'updateCategory') {
                let inputCategory = prompt('Please provide a category name');
                if (inputCategory) {
                    if (inputCategory.length > 0) {
                        updateTempMenu[indexOfSelectedItem].category = inputCategory.toLowerCase();
                    }
                } else {
                    return;
                }
            }
            setTempMenu(updateTempMenu);
        }

    };

    const onClickCategory = ({name}) => {
        setSelectedCategory(name);
        setMenuSearch('');
    };
    const menuItemsToShow = (status) => {
        const activeMenuItems = tempMenu.filter((item) => item.active === status);
        const menuOfSelectedCategory = activeMenuItems.filter((item) => {
            if (selectedCategory === 'All' && !menuSearch.length > 0) {
                return item;
            } else if (menuSearch.length > 0) {
                return item.name.toLowerCase().includes(menuSearch.toLowerCase());
            }
            return item.category === selectedCategory;
        });
        return menuOfSelectedCategory;
    };

    const menuOfSelectedCategoryActive = menuItemsToShow(true);

    const menuArrayActive = menuOfSelectedCategoryActive.map((item, i) => {
        return <Menu key={menuOfSelectedCategoryActive[i].id} id={menuOfSelectedCategoryActive[i].id} name={menuOfSelectedCategoryActive[i].name} price={menuOfSelectedCategoryActive[i].price} onClickMenu={onClickMenu} clickMenuItem={clickMenuItem} setClickMenuItem={setClickMenuItem} path={path} tempMenu={tempMenu}/>
    });

    const menuOfSelectedCategoryHidden = menuItemsToShow(false);

    const menuArrayHidden = menuOfSelectedCategoryHidden.map((item, i) => {
        return <Menu key={menuOfSelectedCategoryHidden[i].id} id={menuOfSelectedCategoryHidden[i].id} name={menuOfSelectedCategoryHidden[i].name} price={menuOfSelectedCategoryHidden[i].price} onClickMenu={onClickMenu} clickMenuItem={clickMenuItem} setClickMenuItem={setClickMenuItem} path={path} tempMenu={tempMenu}/>
    });

    let allCategoriesActive = ['All'];
    let allCategoriesHidden = ['All'];
    for (let i=0; i<tempMenu.length; i++) {
        if (tempMenu[i].active === true) {
            allCategoriesActive.push(tempMenu[i].category)
        } else {
            allCategoriesHidden.push(tempMenu[i].category)
        }
    }
    const uniqueCategoriesActive = [...new Set(allCategoriesActive)];

    const uniqueCategoriesHidden = [...new Set(allCategoriesHidden)];

    const categoriesArray = uniqueCategoriesActive.map((item, i) => {
        return <CategoryItem categoryActive={categoryActive} setCategoryActive={setCategoryActive} onClickCategory={onClickCategory} key={i} id={i} name={item}/>
    });

    const hiddenCategoriesArray = uniqueCategoriesHidden.map((item, i) => {
        return <CategoryItem categoryActive={categoryActive} setCategoryActive={setCategoryActive} onClickCategory={onClickCategory} key={i} id={i} name={item}/>
    });


    return (
        <div>
            <div className='menuArray'>
                <Scroll>
                    {categoriesArray}
                </Scroll>
                <Scroll>
                    {menuArrayActive}
                </Scroll>
            </div>
            {path === 'customize' && hiddenCategoriesArray.length > 1 ?
            <div>
                <h3>Click a menu item to bring it back from the trash</h3>
                <div className='menuArray'>
                    <Scroll>
                        {hiddenCategoriesArray}
                    </Scroll>
                    <Scroll>
                        {menuArrayHidden}
                    </Scroll>
                </div>
            </div>: <span></span>
                }
            <div className='searchContainer'>
                <span id='searchText'>Search menu item:</span>
                <SearchMenu setMenuSearch={setMenuSearch}/>
            </div>
        </div>
    );
};

export default CategoriesWithMenu;