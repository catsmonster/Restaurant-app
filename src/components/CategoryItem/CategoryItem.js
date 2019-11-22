import React from 'react';

const CategoryItem = ({
  name,
  onClickCategory,
  categoryActive,
  setCategoryActive,
  id
}) => {
  return (
    <div
      className={`menuContainer`}
      id={id === categoryActive ? 'categoryActive' : ''}
      onClick={() => {
        onClickCategory({ name });
        setCategoryActive(id);
      }}
    >
      <span className="menuItem">{name}</span>
    </div>
  );
};

export default CategoryItem;
