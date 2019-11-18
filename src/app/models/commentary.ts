export class Commentary {
    constructor(
        public idCommentary: number,
        public idPublication: number,
        public idProfile: number,
        public name: string,
        public lastName: string,
        public publicationDate: string,
        public content: string
    ) { }
};