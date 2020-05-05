import React, { useState } from 'react';

import './styles.css';

const SheetCell = ({ value, selectionHandler }) => {

    const [isSelected, setIsSelected] = useState(false);
    const style = isSelected ? 'SheetCell__selected' : 'SheetCell';

    const handleClick = () => {
        setIsSelected(!isSelected);
        selectionHandler();
    };
    
    return (
        <div>
            <button className={style} onClick={handleClick}>
                {value}
            </button>
        </div>
    );
};

export default SheetCell;