const validateBingoSheetSettings = ({ numRows, numColumns, maxValue }) => {

    // expect: odd number of cells
    if ((numRows * numColumns) % 2 !== 1) {
        return { pass: false, error: "Must be an odd number of cells"}
    }

    return { pass: true, error: '' };
}

export default validateBingoSheetSettings;