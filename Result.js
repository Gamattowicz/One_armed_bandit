class Result {
    static checkWin(result) {
        if (result[0] === result[1] && result[1] === result[2] || result[0] !== result[1] && result[1] !== result[2] && result[0] !== result[2]) return true;
        else return false
    }
    static checkMoney(result, bid) {
        if (result === 'win') {
            return bid * 3;
        } else {
            return 0;
        }

    }
}