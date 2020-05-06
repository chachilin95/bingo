import React from 'react';

import './styles.css';
import SheetCell from './SheetCell';
import SheetColumn from './SheetColumn';

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
    
    // build grid
    let gridJSX = [];
    sheet.forEach((column, columnIndex) => {

        // build each cell for column
        const sheetCells = column.map((cell, rowIndex) => {
            const sheetCellProps = {
                value: cell.value,
                isSelected: cell.isSelected,
                key: `cell:${columnIndex}:${rowIndex}`,
                selectionHandler: () => handlers.handleCellSelection([columnIndex, rowIndex])
            }    

            return ( <SheetCell {...sheetCellProps}/> );
        });

        // build column
        const sheetColumnProps = {
            key: `column:${columnIndex}`,
            cells: sheetCells
        }
        const columnJSX = ( <SheetColumn {...sheetColumnProps} /> );

        gridJSX.push(columnJSX);
    });

    // build bingo sheet
    const sheetJSX = (
        <div className='sheet'>
            { gridJSX }
        </div>
    );

    return sheetJSX;
};

export default BingoSheet;