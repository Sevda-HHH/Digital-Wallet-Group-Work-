export interface ICard {
    cardSeria: string;
    expDate: string;
    cvv: number;
    bankName: string;
    cardType: string;
    balance: {
        currency: string;
        value: string;
    }

    // timestamps
    createdAt: string;
    updatedAt: string;
}

export interface ICosts {
    name: string;
    cardSelect: ICard;
    amount: string;

    // timestamps
    createdAt: string;
    updatedAt: string;
}