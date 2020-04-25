export const FLAGS = {
    error: -99,
    freeSpace: -1,
    init: 0
}

export const generateBingoSheet = ({numRows, numColumns, maxValue}) => {
    const range = maxValue / numColumns;
    const center = {
        column: Math.floor(numColumns / 2),
        row: Math.floor(numRows / 2)
    };

    // create blank bingo sheet
    let sheet = [];

    for (let col = 0; col < numColumns; col++) {
        let used = [];
        let sheetColumn = [];
        let base = (col * range) + 1;

        for (let row = 0; row < numRows; row++) {
            let value = FLAGS.error;
            
            if ((col === center.column) && (row === center.row)) {
                value = FLAGS.freeSpace;
            } else {
                let isUnique = true;
                while (isUnique) {
                    value = base + Math.floor(((Math.random() * range)));
                    isUnique = used.includes(value);
                }
                used.push(value);
            }

            sheetColumn.push(value);
        }
        sheet.push(sheetColumn);
    }
    
    return sheet;
}