import { Commentary } from './commentary';

export class Publication {
    constructor(
        public idPublication: number,
        public idProfile: number,
        public idSchedule: number,
        public idCourse: number,
        public name: string,
        public lastName: string,
        public publicationDate: string,
        public content: string,
        public publicationFile: string,
        public Course: string,
        public commentaries: Commentary[]
    ) { }
};