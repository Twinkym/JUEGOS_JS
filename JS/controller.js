import {
    Model
} from "./model.js";
import {
    View
} from "./view.js";
import {
    messages
} from "./config/messages.js"; // Outsource messages
import {
    constants
} from "./config/constants.js"; // Outsource constants
import "../CSS/tableroStyles.scss"; // Outsource styles classes

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.renderBoard(this.model.board);
        this.view.displayMessage(messages.playerXTurn); // Use outsourced message
        this.addEventListeners();
    }

    addEventListeners() {
        // Add event listeners for each cell on the board
        this.view.cells.forEach((cell, index) => {
            cell.addEventListener("click", () => this.handleClick(index));
        });
    }
    handleMove(index) {
        // Check if the cell is empty and make the move
        if (this.model.playMove(index)) {
            this.view.renderBoard(this.model.board); // Update the board
            this.view.highlightCell(index); // Highlight the Cell
            const winner = this.model.checkWinner(index); // Check the winner 
            if (winner) {
                if (winner === 'tie') {
                    this.view.displayMessage(messages.drawMessage); //                            
                } else {
                    this.view.displayMessage(messages.winMessage);
                }
                this.view.cells.forEach(cell => cell.removeEventListener('click', this.handleMove));
            } else {
                // switchPlayer
                this.model.switchPlayer();
                const currentPlayer = this.model.currentPlayer === 'X' ? 'playerXTurn' : 'playerOTurn';
                this.view.displayMessage(messages[currentPlayer]); // Switch player's turn
                }
            } else {
                //  Throw error if the cell is not empty
                this.view.displayMessage(messages.emptyField);
            }
        }
        getWinCells() {
                const winConditions = this.model.winConditions;
                for (const condition of winConditions) {
                    const [a, b, c] = condition;
                    const cellA = this.view.cells[a];
                    const cellB = this.view.cells[b];
                    const cellC = this.view.cells[c];
                    if (cellA.dataset.state && cellA.dataset.state === cellB.dataset.state && cellA.dataset.state === cellC.dataset.state) {
                        return [cellA, cellB, cellC];
                    }
                }
                return null;
        }
    }

    export default Controller;