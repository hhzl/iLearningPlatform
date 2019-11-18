export class Assignment {
    constructor(
        public idAssignment: number,
        public idProfile: number,
        public idSchedule: number,
        public idCourse: number,
        public identityCard: number,
        public name: string,
        public lastName: string,
        public Course: string,
        public startTime: string,
        public endTime: string,
        public section: string,
        public semester: string,
        public yearSemester: string
    ) { }
};