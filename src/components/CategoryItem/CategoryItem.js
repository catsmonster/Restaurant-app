import React from 'react';

const CategoryItem = ({name, onClickCategory, categoryActive, setCategoryActive, id}) => {
    return (
      <div className={`menuContainer`} id={id===categoryActive ? 'categoryActive' : ''} onClick={() => {
          onClickCategory({name});
          setCategoryActive(id);
      }}>
          <ul className='menuItem'>
              <li>{name}</li>
          </ul>
      </div>
    );
};

export default CategoryItem;