class Game {
    constructor(money) {

        this.money = new Money(money);
        this.infoGame = new InfoGame();

        document.querySelector('button.play').addEventListener('click', this.startGame.bind(this));
        this.numberGame = document.querySelector('div.game span');
        this.winsGame = document.querySelector('div.win span');
        this.lossesGame = document.querySelector('div.losses span');
        this.moneyGame = document.querySelector('div.money span');
        this.boardsGame = [...document.querySelectorAll('div.slot')];
        this.bid = document.querySelector('input.bid');
        this.jackpot = document.querySelector('div.jackpot');

        this.moneyGame.textContent = this.money.showMoney();
    }

    startGame() {

        this.draw = new Draw();
        const slots = this.draw.resultsOfDraw;

        const resultOfGame = Result.checkWin(slots);

        if (this.bid.value < 1) return alert('You have to enter a positive number greater than or equal to 1!');

        if (this.money.canPlay(this.bid.value)) {
            const cash = Result.checkMoney(resultOfGame, Math.floor(this.bid.value));
            if (cash > 0) {
                this.money.changeMoney(Math.floor(this.bid.value), '+');
            } else if (cash <= 0) {
                this.money.changeMoney(Math.floor(this.bid.value), '-');
            }

            this.moneyGame.textContent = this.money.showMoney();
        } else {
            return alert("Sorry, you don't have enough money");
        }

        this.boardsGame.forEach((board, index) => {
            board.style.backgroundColor = slots[index]
        })

        if (resultOfGame) {
            this.jackpot.classList.add('active');
        } else {
            this.jackpot.classList.remove('active');
        }

        this.infoGame.addResultPlay(resultOfGame, this.bid.value);
        const statistics = this.infoGame.showInfoGame();
        this.numberGame.textContent = statistics[0];
        this.winsGame.textContent = statistics[1];
        this.lossesGame.textContent = statistics[2];

        this.bid.value = '';
    }
}

const game = new Game(500)