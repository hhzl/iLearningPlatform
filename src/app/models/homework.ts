export class Homework {
    constructor(
        public idHomework: number,
        public idSchedule: number,
        public name: string,
        public points: number,
        public deadline: string
    ) { }
}