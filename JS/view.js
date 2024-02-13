import { confettiDuration, confettiDelay } from "./confettiConfig.js";

class View {
    constructor() {
        this.cells = document.querySelectorAll('.cell');
        this.message = document.getElementById('message');
    }

    displayMessage(message) {
        this.message.textContent = message;
    }

    renderBoard(board) {
        for (let i = 0; i < board.length; i++) {
            this.cells[i].textContent = board[i].textContent;
        }              
    }

    highlightCell(index){
            this.animateCell(this.cells[index], 'light', 500);
    }

    spawnConfetti(cellIndex){
            const cell = this.cells[cellIndex];
            const confettiContainer = document.createElement('div');
            this.createConfetti(confettiContainer, 10);
            this.removeConfettiContainer(confettiContainer, confettiDelay);        
    }    

    animateCell(cell, className, duration) {
            cell.classList.add(className);
            setTimeout(() => {
                cell.classList.remove(className);
            }, duration);
    }

    createConfettiContainer(parent) {
        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add("confetti-container");
        parent.appendChild(confettiContainer);
        return confettiContainer;
    }

    createConfetti(container, count) {
        for (let i=0; i<count; i++){
            const confetti = document.createElement('div');
            confetti.classList.add("confetti");
            confetti.style.left = `${this.randomHorizontalPosition()}%`;            
            container.appendChild(confetti);
    }
}

randomHorizontalPosition() {
        return Math.random() * 100; // Calculate a random horizontal position between 0 and 100 
}

    removeConfettiContainer(container, delay) {
        setTimeout(() => {
            container.remove();
        }, confettiDelay);
    }
}
export default View;
