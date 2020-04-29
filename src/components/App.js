import React, { useState } from 'react';

// components
import BingoSheet from './BingoSheet';
import BingoSheetGenerator from './BingoSheetGenerator';

export default () => {

    const initGameData = { sheet: [], settings: {}}
    const [gameData, updateGameData] = useState(initGameData);

    return (
        <div>
            <BingoSheetGenerator handler={(data) => updateGameData(data)}/>
            <BingoSheet gameData={gameData}/>
        </div>
    );
};