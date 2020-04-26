function userCard(number) {

    const date = new Date()
    const actionTypes = ["Put credits", "Take credits", "Set transaction Limit"];
    const card = {
        key: number,
        balance: 100,
        transactionLimit: 100,
        historyLogs: []
    }

    return {
        getCardOptions: function () {
            return card

        },
        putCredits: function (money) {
            card.historyLogs.push({
                'operationType': actionTypes[0],
                'credits': money,
                'operationTime': date.toLocaleString()
            });

            return card.balance += money
        },
        takeCredits: function (money) {
            if (money >= card.balance || card.transactionLimit == 0) {
                console.error('недостатньо коштів')
            } else {
                card.historyLogs.push({
                    'operationType': actionTypes[1],
                    'credits': money,
                    'operationTime': date.toLocaleString()
                });
                return card.balance -= money
            }
        },
        setTransactionLimit: function (nLimit) {
            card.historyLogs.push({
                'operationType': actionTypes[2],
                'credits': nLimit,
                'operationTime': date.toLocaleString()
            });
            return card.transactionLimit = nLimit
        },
        transferCredits: function (credit, otherCard) {

            if (credit > card.balance && card.transactionLimit == 0) {
                console.error('недостатньо коштів')
            } else {
                let newCredit = (credit - (credit * 0.005))

                this.takeCredits(credit)

                otherCard.putCredits(newCredit)
                return credit

            }
        },

    }
}

const card3 = userCard(3);
const card4 = userCard(4);
const card5 = userCard(5)


// console.log(card3.getCardOptions());
// card3.putCredits(120);
// card3.takeCredits(80);
// card3.setTransactionLimit(10);
card3.transferCredits(10, card4);


// завдання 2


class UserAccount {
    constructor(name) {
        this.name = name
        this.cards = []
    }

    userCard(number) {

        const date = new Date()
        const actionTypes = ["Put credits", "Take credits", "Set transaction Limit"];
        const card = {
            key: number,
            balance: 100,
            transactionLimit: 100,
            historyLogs: []
        }

        return {
            getCardOptions: function () {
                return card

            },
            putCredits: function (money) {
                card.historyLogs.push({
                    'operationType': actionTypes[0],
                    'credits': money,
                    'operationTime': date.toLocaleString()
                });

                return card.balance += money
            },
            takeCredits: function (money) {
                if (money >= card.balance || card.transactionLimit == 0) {
                    console.error('недостатньо коштів')
                } else {
                    card.historyLogs.push({
                        'operationType': actionTypes[1],
                        'credits': money,
                        'operationTime': date.toLocaleString()
                    });
                    return card.balance -= money
                }
            },
            setTransactionLimit: function (nLimit) {
                card.historyLogs.push({
                    'operationType': actionTypes[2],
                    'credits': nLimit,
                    'operationTime': date.toLocaleString()
                });
                return card.transactionLimit = nLimit
            },
            transferCredits: function (credit, otherCard) {

                if (credit > card.balance && card.transactionLimit == 0) {
                    console.error('недостатньо коштів')
                } else {
                    let newCredit = (credit - (credit * 0.005))

                    this.takeCredits(credit)

                    otherCard.putCredits(newCredit)
                    return credit

                }
            },

        }
    }


    addCard() {
        if (this.cards.length < 4) {
            this.cards.push(this.userCard(this.cards.length + 1))
        } else {
            console.log("error")
        }

    }

    getCardByKey(number) {
        return this.cards.find(c => c.getCardOptions().key == number).getCardOptions()

    }
}

//
let user = new UserAccount('Bob');
// // user.addCard()
// // user.addCard()
// let card1 = user.getCardByKey(1);
// // let card2 = user.getCardByKey(2);
// card1.putCredits(500);
// // card1.setTransactionLimit(800);
// // card1.transferCredits(300, card2);
// // card2.takeCredits(50);
// // console.log(card1.getCardOptions());

