import winConditions from "./winConditions.js";

class Model {
    constructor() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
    }

    playMove(index){
        if (this.board[index] === '') {
            this.board[index] = this.currentPlayer;
            return true;         
        }
        return false;
    }

    switchPlayer () {
        this.currentPlayer = (this.currentPlayer === 'X') ? 'O' : this.currentPlayer;          
    }

    checkWin() {
            for (let condition of winConditions){
                const [a, b, c] = condition;
                if ((this.board[a]===this.board[b]) && (this.board[a]===this.board[c])){
                    return this.board[a];  //return the winner ('X' or 'O')
                };
            }
            
            if (!this.board.includes('')) {
                return 'tie'; // if there is no winner and the board is full is a draw
            }
            return null;      //no one wins yet
    }

    resetBoard() {
        this.board = ['', '', '', '', '', '', '', ''];
        this.currentPlayer = 'X';
    }
}

export default Model;