import React from 'react';
import Menu from "./Menu";
import CategoryItem from "../CategoryItem/CategoryItem";
import Scroll from "../Scroll";
import SearchMenu from "../SearchMenu/SearchMenu";

const CategoriesWithMenu = ({tempTables, clickedTable, setTempTables, path, setSelectedCategory, setMenuSearch, menuSearch, selectedCategory, categoryActive, setCategoryActive, tempMenu, setTempMenu}) => {
    const onClickMenu = ({name, price}) => {

        if (path.includes('order_')) {
            const updatedTempTables = [...tempTables];
            updatedTempTables[clickedTable].orders.push({name: name, status: 'waiting', time: new Date(), table: clickedTable});
            updatedTempTables[clickedTable].total += price;
            updatedTempTables[clickedTable].tableActive = 'waiting';
            setTempTables(updatedTempTables);
        } else {
            const indexOfSelectedItem = tempMenu.findIndex((item) => item.name === name);
            const updateTempMenu = [...tempMenu];
            updateTempMenu[indexOfSelectedItem].active = false;
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
        return <Menu key={menuOfSelectedCategoryActive[i].id} id={menuOfSelectedCategoryActive[i].id} name={menuOfSelectedCategoryActive[i].name} price={menuOfSelectedCategoryActive[i].price} onClickMenu={onClickMenu}/>
    });

    let allCategories = ['All'];
    for (let i=0; i<tempMenu.length; i++) {
        if (tempMenu[i].active === true) {
            allCategories.push(tempMenu[i].category)
        }
    }
    const uniqueCategories = [...new Set(allCategories)];

    const categoriesArray = uniqueCategories.map((item, i) => {
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
            <div className='searchContainer'>
                <span id='searchText'>Search menu item:</span>
                <SearchMenu setMenuSearch={setMenuSearch}/>
            </div>
        </div>
    );
};

export default CategoriesWithMenu;