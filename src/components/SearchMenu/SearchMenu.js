import React from 'react';

const SearchMenu = ({setMenuSearch}) => {
  return (
    <div>
        <input onChange={(e) => setMenuSearch(e.target.value)}/>
    </div>
  );
};

export default SearchMenu;