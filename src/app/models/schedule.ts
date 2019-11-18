export class Schedule {
    constructor(
        public idSchedule: number,
        public idCourse: number,
        public idProfile: number,
        public Course: string,
        public Assistant: string,
        public startTime: string,
        public endTime: string,
        public section: string,
        public semester: string,
        public yearSemester: string
    ) { }
};