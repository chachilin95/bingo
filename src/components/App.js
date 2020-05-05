import React, { useState } from 'react';

// components
import BingoSheet from './BingoSheet';
import BingoSheetGenerator from './BingoSheetGenerator';

export default () => {

    const initGameData = { sheet: [], settings: {}}
    const [gameData, updateGameData] = useState(initGameData);

    const handleSheetGeneration = (data) => updateGameData(data);    

    const handleCellSelection = (coords) => {
        const [ column, row ] = coords;

        const updatedSheet = gameData.sheet.slice();
        const isSelected = updatedSheet[column][row].isSelected;
        
        updatedSheet[column][row].isSelected = !isSelected;
        updateGameData({ ...gameData, sheet: updatedSheet });
    };

    const BingoSheetHandlers = { handleSheetGeneration, handleCellSelection };

    return (
        <div>
            <BingoSheetGenerator handlers={BingoSheetHandlers}/>
            <BingoSheet gameData={gameData} handlers={BingoSheetHandlers}/>
        </div>
    );
};