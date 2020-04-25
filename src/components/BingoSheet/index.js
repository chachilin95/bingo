import React, { useState } from 'react';

import { generateBingoSheet } from './util/generator'
import BingoSheetGenerator from './BingoSheetGenerator';

const BingoSheet = () => {

    const createBingoSheet = ({ numRows, numColumns }) => {
        console.log(generateBingoSheet({ numRows, numColumns, maxValue: 75})) // TODO
    }

    return (
        <div>
            <h1>Bingo Time!</h1>
            <BingoSheetGenerator handler={(settings) => createBingoSheet(settings)}/>
        </div>
    );
};

export default BingoSheet;