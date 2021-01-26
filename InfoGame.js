class InfoGame {
    constructor() {
        //Array with result of all games
        this.results = [];
    }
    //Add result current game
    addResultPlay = (win, bid) => {
        let gameResult = {
            win: win,
            bid: bid
        }
        console.log(gameResult)
        this.results.push(gameResult)
    }
    //Show result of all games
    showInfoGame = () => {
        let games = this.results.length;
        let wins = this.results.filter(result => result.win).length;
        let losses = games - wins;
        console.log(games, wins, losses);
        return [games, wins, losses]
    }
}