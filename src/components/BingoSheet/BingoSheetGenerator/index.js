import React, { useState } from 'react';

const BingoSheetGenerator = ({ handler }) => {
    
    // bingo sheet settings
    const [numRows, setNumRows] = useState(5);
    const [numColumns, setNumColumns] = useState(5);

    const handleIncrementRow = (e) => {
        e.preventDefault();
        setNumRows(numRows + 1);
    }

    const handleIncrementColumn = (e) => {
        e.preventDefault();
        setNumColumns(numColumns + 1);
    }

    const handleDecrementRow = (e) => {
        e.preventDefault();
        setNumRows(numRows - 1);
    }

    const handleDecrementColumn = (e) => {
        e.preventDefault();
        setNumColumns(numColumns - 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handler({ numRows, numColumns });
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Number of Rows:
                        <button onClick={(e) => handleIncrementRow(e)}>+1</button>
                        {numRows}
                        <button onClick={(e) => handleDecrementRow(e)}>-1</button>
                    </label>
                </div>
                <div>
                    <label>
                        Number of Columns:
                        <button onClick={(e) => handleIncrementColumn(e)}>+1</button>
                        {numColumns}
                        <button onClick={(e) => handleDecrementColumn(e)}>-1</button>
                    </label>
                </div>
                <button>Generate a New Sheet!</button>
            </form>
        </div>
    );

}

export default BingoSheetGenerator;