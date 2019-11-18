export class User {
    constructor(
        public idProfile: number,
        public email: string,
        public password: string,
        public name: string,
        public lastName: string,
        public identityCard: number,
        public isStudent: boolean,
        public isAdministrator: boolean,
        public isAssistant: boolean,
        public isDisabled: boolean
    ) { }
};