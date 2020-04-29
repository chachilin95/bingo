import React from 'react';

import SheetCell from './SheetCell';

const BlankBingoSheet = (
    <div>
        <h1>Create a New Bingo Sheet!</h1>
    </div>
);

const BingoSheet = ({ gameData }) => {

    const sheet = gameData.sheet;
    const settings = gameData.settings;

    if (Array.isArray(sheet) && sheet.length === 0) {
        return BlankBingoSheet;
    }
    
    let sheetJSX = [];
    sheet.forEach((column, columnIndex) => {
        sheetJSX.push(
            <div key={columnIndex}>
                {column.map((cell, rowIndex) => {
                    const cellKey=`${columnIndex}:${rowIndex}`;
                    return (
                        <SheetCell key={cellKey} cellValue={cell.value}/>
                    );
                })}
            </div>
        );      
    });

    return (
        <div>
            {sheetJSX.map((sheetColumn) => sheetColumn)}
        </div>
    );
};

export default BingoSheet;