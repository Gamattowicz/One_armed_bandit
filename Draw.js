class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue']
        this.resultsOfDraw = [];
        this.drawResults()
    }
    drawResults = () => {
        for (let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const result = this.options[index];
            console.log(result);
            this.resultsOfDraw.push(result);
        }
    }
}