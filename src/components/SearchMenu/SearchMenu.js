import React from 'react';

const SearchMenu = ({setMenuSearch}) => {
  return (
    <div>
        <input className="searchBox" onChange={(e) => setMenuSearch(e.target.value)}/>
    </div>
  );
};

export default SearchMenu;