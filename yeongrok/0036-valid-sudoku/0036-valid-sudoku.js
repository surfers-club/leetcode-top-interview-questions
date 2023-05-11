/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    /* 0 1 2
       3 4 5
       6 7 8 */
    const area = [...Array(10).keys()].map(i => ({}));

    const columns = [...Array(10).keys()].map(i => ({}));

    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        const appearedInRow = {};
        for (let j = 0; j < row.length; j++) {
            if (row[j] !== "." && (row[j] < 1 || row[j] > 9 || appearedInRow[row[j]] || columns[j][row[j]])) return false;
            appearedInRow[row[j]] = true;
            columns[j][row[j]] = true;

            let areaNum;
            if (i < 3) {
                if (j < 3) {
                    areaNum = 0;
                } else if (j < 6) {
                    areaNum = 1;                    
                } else {
                    areaNum = 2;
                }
            } else if (i < 6) {
                if (j < 3) {
                    areaNum = 3;
                } else if (j < 6) {
                    areaNum = 4;
                } else {
                    areaNum = 5;
                }
            }
            else {
                if (j < 3) {
                    areaNum = 6;
                } else if (j < 6) {
                    areaNum = 7;
                } else {
                    areaNum = 8;
                }

            }
            if (row[j] !== "." && area[areaNum][row[j]]) return false;
            area[areaNum][row[j]] = true;
        }
    }
    return true;
};
