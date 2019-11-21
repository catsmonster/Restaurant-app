import React from 'react';
import {tempMenu} from "./tempMenu";
import Menu from "./Menu";
import CategoryItem from "../CategoryItem/CategoryItem";
import Scroll from "../Scroll";
import SearchMenu from "../SearchMenu/SearchMenu";

const CategoriesWithMenu = ({tempTables, clickedTable, setTempTables, path, setSelectedCategory, setMenuSearch, menuSearch, selectedCategory, categoryActive, setCategoryActive}) => {
    const onClickMenu = ({name, price}) => {
        const updatedTempTables = [...tempTables];
        if (path.includes('order_')) {
            updatedTempTables[clickedTable].orders.push({name: name, status: 'waiting', time: new Date(), table: clickedTable});
            updatedTempTables[clickedTable].total += price;
            updatedTempTables[clickedTable].tableActive = 'waiting';
        } else {
            console.log('This is the customize categories page');
        }
        setTempTables(updatedTempTables);
    };

    const onClickCategory = ({name}) => {
        setSelectedCategory(name);
        setMenuSearch('');
    };

    const menuOfSelectedCategory = tempMenu.filter((item) => {
        if (selectedCategory === 'All' && !menuSearch.length > 0) {
            return item;
        } else if (menuSearch.length > 0) {
            return item.name.toLowerCase().includes(menuSearch.toLowerCase());
        }
        return item.category === selectedCategory;
    });

    const menuArray = menuOfSelectedCategory.map((item, i) => {
        return <Menu key={menuOfSelectedCategory[i].id} id={menuOfSelectedCategory[i].id} name={menuOfSelectedCategory[i].name} price={menuOfSelectedCategory[i].price} onClickMenu={onClickMenu}/>
    });

    let allCategories = ['All'];
    for (let i=0; i<tempMenu.length; i++) {
        allCategories.push(tempMenu[i].category)
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
                    {menuArray}
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