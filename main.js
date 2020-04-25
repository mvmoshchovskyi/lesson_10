function userCard(number) {

    const date = new Date()

    const card = {
        key: 2,
        balance: 100,
        transactionLimit: 100,
        historyLogs: [
            {operationType: '', credits: '', operationTime: `${date}`},
        ],
    }
    return {
        getCardOptions: function () {
            // let CardOptions = (        {key:2, balance: 100, transactionLimit: 100})
            // return cardOptions
            // {operationType:`${receivedCredits}`,credits: `${newCredit}` , operationTime: `${date}`}
        },
        putCredits: function (money) {
            let receivedCredits = (card.balance + money)
            return receivedCredits
        },
        takeCredits: function (money) {
            if (money > card.balance && transactionLimit > 0) {
                console.error('недостатньо коштів')
            } else {
                let widhdrawalOfCredits = (card.balance - money)
                return widhdrawalOfCredits
            }
        },
        setTransactionLimit: function (nLimit) {
            transactionLimit = card.transactionLimit = nLimit
        },
        transferCredits: function (credit, card1) {

            if (credit > card.balance && transactionLimit > 0) {
                console.error('недостатньо коштів')
            } else {
                let newCredit = (credit - (credit * 0.005))
                return newCredit
            }
        },
    }
}

const card3 = userCard(3);
card3.getCardOptions();
card3.putCredits(120);
card3.takeCredits(80);
card3.setTransactionLimit(10);
card3.transferCredits(50, userCard());

// треба зробити функцію яка буде дивитись та відслідковувати усе що відбувалось
// зробилась функція якась, викликається і запис


// завдання 2


class UserAccount {
    constructor(options) {
        this.name = options.name
        this.cards = options.cards
    }

    addCard() {
        userCard()
        card <= 3
    }

    getCardByKey() {
return {
key: 1,
balance: 150,
    transactionLimit: 100,
historyLogs:[{}]
}
    }
}

const user = new UserAccount({
    name: 'Bob',
    cards: 3,
    addCard: true
});

// let user = new UserAccount('Bob');
// user.addCard()
// user.addCard()
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
// card2.takeCredits(50);
// console.log(card1.getCardOptions());