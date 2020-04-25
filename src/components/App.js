import React from 'react';

// components
import BingoSheet from './BingoSheet';
import BingoSheetGenerator from './BingoSheetGenerator';

import { generateBingoSheet } from '../util/generator';

export default () => {

    const createBingoSheet = ({ numRows, numColumns }) => {
        console.log('generating');
        console.log(generateBingoSheet({ numRows, numColumns, maxValue: 75})) // TODO: figure out how to adjust maxValue per number of rows and columns
    }

    return (
        <div>
            <BingoSheetGenerator handler={(settings) => createBingoSheet(settings)}/>
            <BingoSheet/>
        </div>
    );
};