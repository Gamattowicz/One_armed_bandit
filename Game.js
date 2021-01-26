class Game {
    constructor(money) {

        this.money = new Money(money)
        this.infoGame = new InfoGame();

        document.querySelector('button.play').addEventListener('click', this.startGame.bind(this));
        this.numberGame = document.querySelector('div.game span');
        this.winsGame = document.querySelector('div.win span');
        this.lossesGame = document.querySelector('div.losses span');
        this.moneyGame = document.querySelector('div.money span');
        this.boardsGame = [...document.querySelectorAll('div.slot')];
        this.bid = document.querySelector('input.bid');
        this.jackpot = document.querySelector('div.jackpot');

    }

    startGame() {

        this.draw = new Draw();
        const slots = this.draw.resultsOfDraw;
        this.boardsGame.forEach((board, index) => {
            board.style.backgroundColor = slots[index]
        })

        const resultOfGame = Result.checkWin(slots);
        if (resultOfGame) {
            this.jackpot.classList.add('active');
        } else {
            this.jackpot.classList.remove('active');
        }
        const cash = Result.checkMoney(resultOfGame, this.bid.value);
        console.log(resultOfGame);


        this.infoGame.addResultPlay(resultOfGame, this.bid.value);
        const statistics = this.infoGame.showInfoGame();
        this.numberGame.textContent = statistics[0];
        this.winsGame.textContent = statistics[1];
        this.lossesGame.textContent = statistics[2];
        this.moneyGame.textContent = this.money.showMoney();
    }
}

const game = new Game(500)