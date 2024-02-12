class View {
    constructor() {
        this.cells = document.querySelectorAll('.cell');
        this.message = document.querySelectorById('message');
    }

    displayMessage(message) {
        this.message.textContent = message;
    }

    renderBoard(board) {
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i].textContent = board[i];
        }
    }

    highlightCell(index) {
        this.cells[index].classList.add('light');
        setTimeout(() => {
            this.cells[index].classList.remove('light');
        }, 500);
    }

    spawnConfeti(cellIndex) {
        const cell = this.cells[cellIndex];
        const confetiContainer = document.createElement('div');
        confetiContainer.classList.add('confeti-container');
        cell.appendChild(confetiContainer);

        for (let i = 0; i < 10; i++) {
            const confeti = document.createElement('div');
            confeti.classList.add('confeti');
            confeti.style.left = `${Math.random()}s`;
            confetiContainer.appendChild(confeti);
        }

        setTimeout(() => {
            confetiContainer.remove();
        }, 4000);
    }

}