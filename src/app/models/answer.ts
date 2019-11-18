export class Answer {
    constructor(
        public idAnswer: number,
        public idQuestion: number,
        public isRight: boolean,
        public content: string,
    ) { }
}