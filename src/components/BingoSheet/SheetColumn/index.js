import React from 'react';

import './styles.css';

const SheetColumn = ({ cells }) => {
    
    return (
        <div className='sheet__column'>
            { cells }
        </div>
    );
};

export default SheetColumn;