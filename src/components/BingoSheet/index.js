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

    const { sheet } = gameData;
    if (Array.isArray(sheet) && sheet.length === 0) {
        return BlankBingoSheet;
    }

    // build grid
    let gridJSX = sheet.map((column, columnIndex) => {

        // build each cell for column
        const sheetCells = column.map((cell, rowIndex) => (
            <SheetCell
                value={cell.value}
                isSelected={cell.isSelected}
                key={`cell:${columnIndex}:${rowIndex}`}
                selectionHandler={() => handlers.handleCellSelection([columnIndex, rowIndex])}
            />
        ));

        // build column with cells
        return (
            <SheetColumn
                key={`column:${columnIndex}`}
                cells={sheetCells}
            />
        );
    });

    // build bingo sheet
    return (
        <div className='sheet'>
            { gridJSX }
        </div>
    );
};

export default BingoSheet;