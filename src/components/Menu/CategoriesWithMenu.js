import React from 'react';
import Menu from "./Menu";
import CategoryItem from "../CategoryItem/CategoryItem";
import Scroll from "../Scroll";
import SearchMenu from "../SearchMenu/SearchMenu";

const CategoriesWithMenu = ({tempTables, clickedTable, setTempTables, path, setSelectedCategory, setMenuSearch, menuSearch, selectedCategory, categoryActive, setCategoryActive, tempMenu, setTempMenu, clickMenuItem, setClickMenuItem}) => {
    const onClickMenu = ({name, price}) => {
        if (path.includes('order_')) {
            const updatedTempTables = [...tempTables];
            if (clickMenuItem.id === 'add') {
                updatedTempTables[clickedTable].orders.push({name: name, status: 'waiting', time: new Date(), table: clickedTable, comments: []});
                updatedTempTables[clickedTable].total += price;
            } else if (clickMenuItem.id === 'addComment') {
                const commentInput = prompt('Enter your custom comment:');
                updatedTempTables[clickedTable].orders.push({name: name, status: 'waiting', time: new Date(), table: clickedTable, comments: [commentInput]});
                updatedTempTables[clickedTable].total += price;
            }
            updatedTempTables[clickedTable].tableActive = 'waiting';
            setTempTables(updatedTempTables);
        } else {
            const indexOfSelectedItem = tempMenu.findIndex((item) => item.name === name);
            const updateTempMenu = [...tempMenu];
            if (updateTempMenu[indexOfSelectedItem].active === true) {
                updateTempMenu[indexOfSelectedItem].active = false;
                setTempMenu(updateTempMenu);
            } else {
                updateTempMenu[indexOfSelectedItem].active = true;
                setTempMenu(updateTempMenu);
            }
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
        return <Menu key={menuOfSelectedCategoryActive[i].id} id={menuOfSelectedCategoryActive[i].id} name={menuOfSelectedCategoryActive[i].name} price={menuOfSelectedCategoryActive[i].price} onClickMenu={onClickMenu} clickMenuItem={clickMenuItem} setClickMenuItem={setClickMenuItem}/>
    });

    const menuOfSelectedCategoryHidden = menuItemsToShow(false);

    const menuArrayHidden = menuOfSelectedCategoryHidden.map((item, i) => {
        return <Menu key={menuOfSelectedCategoryHidden[i].id} id={menuOfSelectedCategoryHidden[i].id} name={menuOfSelectedCategoryHidden[i].name} price={menuOfSelectedCategoryHidden[i].price} onClickMenu={onClickMenu}/>
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