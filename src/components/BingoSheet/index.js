import React from 'react';

import './styles.css';
import SheetCell from './SheetCell';

const BlankBingoSheet = (
    <div>
        <h1>Create a New Bingo Sheet!</h1>
    </div>
);

const BingoSheet = ({ gameData, handlers }) => {

    const sheet = gameData.sheet;

    if (Array.isArray(sheet) && sheet.length === 0) {
        return BlankBingoSheet;
    }

    const createSheetCellProps = (columnIndex, rowIndex, value) => ({
        value,
        key: `${columnIndex}:${rowIndex}`,
        selectionHandler: () => handlers.toggleCellSelection([columnIndex, rowIndex])
    });
    
    // build grid
    let gridJSX = [];
    sheet.forEach((column, columnIndex) => {
        
        // build column
        const columnJSX = (
            <div key={columnIndex} className='sheet__column'>
                {
                    // build each cell in column
                    column.map((cell, rowIndex) => {
                        const props = createSheetCellProps(columnIndex, rowIndex, cell.value);                    
                        return ( <SheetCell {...props}/> );
                    })
                }
            </div>
        );

        gridJSX.push(columnJSX);
    });

    // build bingo sheet
    const sheetJSX = (
        <div className='sheet'>
            {gridJSX.map((sheetColumn) => sheetColumn)}
        </div>
    );

    return sheetJSX;
};

export default BingoSheet;