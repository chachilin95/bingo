import React, { useState } from 'react';

import ValidateSheetSettings from './util/validator';
import SheetGenerator from './util/generator';

const BingoSheetGenerator = ({ handler }) => {

    const [errorMessage, setErrorMessage] = useState('');
    
    // bingo sheet settings
    const [numRows, setNumRows] = useState(5);
    const [numColumns, setNumColumns] = useState(5);
    const [columnRange, setColumnRange] = useState(15);

    // ROW //

    const handleRowChange = (e) => {
        e.preventDefault();
        setNumRows(e.target.value);
    }

    const handleIncrementRow = (e) => {
        e.preventDefault();
        setNumRows(numRows + 1);
    }

    const handleDecrementRow = (e) => {
        e.preventDefault();
        setNumRows(numRows - 1);
    }

    // COLUMN //

    const handleColumnChange = (e) => {
        e.preventDefault();
        setNumColumns(e.target.value);
    }

    const handleIncrementColumn = (e) => {
        e.preventDefault();
        setNumColumns(numColumns + 1);
    }

    const handleDecrementColumn = (e) => {
        e.preventDefault();
        setNumColumns(numColumns - 1);
    }

    // NUMBERS PER ROW //

    const handleRangeChange = (e) => {
        e.preventDefault();
        setColumnRange(e.target.value);
    }

    const handleIncrementRange = (e) => {
        e.preventDefault();
        setColumnRange(columnRange + 1);
    }

    const handleDecrementRange = (e) => {
        e.preventDefault();
        setColumnRange(columnRange - 1);
    }

    // SUBMIT //

    const handleSubmit = (e) => {
        e.preventDefault();

        const settings = { numRows, numColumns, columnRange };

        const results = ValidateSheetSettings(settings);
        
        if (results.pass) {
            const sheet = SheetGenerator(settings);
            handler({ sheet, settings });
        } else {
            setErrorMessage(`The Sheet is Invalid: ${results.error}`)
        }
    }    

    return (
        <div>
            <div>
                {errorMessage && <h1>{errorMessage}</h1>}
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Number of Rows:
                        <button onClick={(e) => handleIncrementRow(e)}>+1</button>
                        <input type='text' value={numRows} onChange={(e) => handleRowChange(e)}/>
                        <button onClick={(e) => handleDecrementRow(e)}>-1</button>
                    </label>
                </div>
                <div>
                    <label>
                        Number of Columns:
                        <button onClick={(e) => handleIncrementColumn(e)}>+1</button>
                        <input type='text' value={numColumns} onChange={(e) => handleColumnChange(e)}/>
                        <button onClick={(e) => handleDecrementColumn(e)}>-1</button>
                    </label>
                </div>
                <div>
                    <label>
                        Numbers per Column:
                        <button onClick={(e) => handleIncrementRange(e)}>+1</button>
                        <input type='text' value={columnRange} onChange={(e) => handleRangeChange(e)}/>
                        <button onClick={(e) => handleDecrementRange(e)}>-1</button>
                    </label>
                </div>
                <button>Generate a New Sheet!</button>
            </form>
        </div>
    );

}

export default BingoSheetGenerator;