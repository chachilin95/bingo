import React, { useState } from 'react';

// components
import BingoSheet from './BingoSheet';
import BingoSheetGenerator from './BingoSheetGenerator';

export default () => {

    const [bingoSheet, updateBingoSheet] = useState([]);

    return (
        <div>
            <BingoSheetGenerator handler={(sheet) => updateBingoSheet(sheet)}/>
            <BingoSheet sheet={bingoSheet}/>
        </div>
    );
};