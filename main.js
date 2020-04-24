function userCard(number) {

    const date = new Date()

    const CardOptions = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [
            {operationType:'', credits: '', operationTime: `${date}`},
            // {operationType: '', credits: '', operationTime: `${date}`},
            // {operationType: '', credits: '', operationTime: `${date}`},
        ],
        key:number
    }
    return {
        getCardOptions: function () {
            return CardOptions
            //(`balance: ${CardOptions.balance},`)
        },
        putCredits: function (money) {
            let receivedCredits = (CardOptions.balance + money)
            return receivedCredits
        },
        takeCredits: function (money) {
            if (money > CardOptions.balance && transactionLimit > 0) {
                console.error('недостатньо коштів')
            } else {
                let widhdrawalOfCredits = (CardOptions.balance - money)
                return widhdrawalOfCredits
            }
        },
        setTransactionLimit: function (nLimit) {
            transactionLimit = CardOptions.transactionLimit = nLimit
        },
        transferCredits: function (credit, card1) {

            if (credit > CardOptions.balance && transactionLimit > 0) {
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
