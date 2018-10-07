export class company {
    name: string;
    catchPhrase: string;
}

export class User {
    name: string;
    id: string;
    email: string;
    company: company;
    constructor() {}
}