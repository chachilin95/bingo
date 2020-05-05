import React from 'react';

import './styles.css';

const SheetCell = ({ value, isSelected, selectionHandler }) => {

    const style = isSelected ? 'SheetCell__selected' : 'SheetCell';
    
    return (
        <div>
            <button className={style} onClick={() => selectionHandler()}>
                {value}
            </button>
        </div>
    );
};

export default SheetCell;