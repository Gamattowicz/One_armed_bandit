class Game {
    constructor(money) {

        document.querySelector('button.play').addEventListener('click', this.startGame(this));
        this.scoreGame = document.querySelector('div.game');
        this.winsGame = document.querySelector('div.win');
        this.lossesGame = document.querySelector('div.losses');
        this.moneyGame = document.querySelector('div.money');
        this.boardGame = [...document.querySelectorAll('div.slot')];

    }
    startGame() {

    }
}

const game = new Game(500)