import React from 'react';

const RemoveMenu = ({name, onRemoveOrderedItem}) => {
    return (
        <div onClick={()=> {

        }}>
            {name[1]<2 ?
                <div>
                    <button onClick={()=> onRemoveOrderedItem({name})}>X</button>
                    {`The table ordered ${name[1]} plate of ${name[0]}`}
                </div> :
                <div>
                    <button onClick={()=> onRemoveOrderedItem({name})}>X</button>
                    {`The table ordered ${name[1]} plates of ${name[0]}`}
                </div>}

        </div>
    );
};

export default RemoveMenu;