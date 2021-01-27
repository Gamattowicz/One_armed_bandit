class Money {
    constructor(cash) {
        let _cash = cash;
        //Return the current value of the money
        this.showMoney = () => _cash;
        //Check if user can still play 
        this.canPlay = value => (_cash >= value);

        this.changeMoney = (money, type) => {
            if (typeof money === 'number' && !isNaN(money)) {
                if (type === '+') {
                    return _cash += money;
                } else if (type === '-') {
                    console.log(_cash + 'jest');
                    return _cash = _cash - money;
                } else {
                    throw new Error('You can only add or subtract from your wallet')
                }
            } else {
                console.log(typeof money);
                throw new Error('You have to enter a number!')
            }
        }
    }
}