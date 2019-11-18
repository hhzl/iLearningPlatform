export class Ticket {
    constructor(
        public idTicket: number,
        public idAssignment: number,
        public state: string,
        public issue: string,
        public content: string,
        public publicationDate: string
    ) { }
}