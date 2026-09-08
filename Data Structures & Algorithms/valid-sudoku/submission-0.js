class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
    // console.log(board[i])
    let rowHM = {
      "1": false,
      "2": false,
      "3": false,
      "4": false,
      "5": false,
      "6": false,
      "7": false,
      "8": false,
      "9": false,
    };
    let colHM = {
      "1": false,
      "2": false,
      "3": false,
      "4": false,
      "5": false,
      "6": false,
      "7": false,
      "8": false,
      "9": false,
    };

    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        //row check
        // console.log(i,j,board[i][j])
        if (rowHM[board[i][j]]) {
          return false;
        } else {
          // console.log(board[i][j])
          rowHM[board[i][j]] = true;
        }
      }
      //col check
      if (board[j][i] !== ".") {
        // console.log(j, i, board[j][i]);
        if (colHM[board[j][i]]) {
          return false;
        } else {
          colHM[board[j][i]] = true;
        }
      }
    }
    // console.log(rowHM)
    // console.log("++++++++++++++");
  }
  //subsquire check
   let subBox= [
      {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
      },
      {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
      },
      {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
      },
      {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
      },
      {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
      },
      {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
      },
      {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
      },
      {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
      },
      {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
      },
      {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
      }
    ];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        //subsquire check
        if (board[i][j] !== ".") {
          // console.log(Math.floor(i / 3) * 3 + Math.floor(j / 3),i,j,subBox[Math.floor(i / 3) * 3 + Math.floor(j / 3)][board[i][j]])
          if (subBox[Math.floor(i / 3) * 3 + Math.floor(j / 3)][board[i][j]]){
            return false
          }else{
            subBox[Math.floor(i / 3) * 3 + Math.floor(j / 3)][board[i][j]] = true
          }
        }
      }
  }
  return true;
    }
}
