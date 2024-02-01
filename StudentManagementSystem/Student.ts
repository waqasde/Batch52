export  class Student {
    private static nextId = 1000; // Static variable for generating unique IDs
    private name: string;
    private studentID: string;
    private courses: string[] = [];
    private balance: number = 0;

    constructor(name: string) {
        this.name = name;
        this.studentID = this.generateStudentID();
    }

    private generateStudentID(): string {
        return (Student.nextId++).toString();
    }

    public enrollCourse(course: string): void {
        this.courses.push(course);
        this.balance += 600; // Assuming a fixed fee for each course
    }

    public viewBalance(): number {
        return this.balance;
    }

    public payTuition(amount: number): void {
        this.balance -= amount;
    }

    public showStatus(): string {
        return `Name: ${this.name}\nID: ${this.studentID}\nCourses: ${this.courses.join(', ')}\nBalance: $${this.balance}`;
    }
}
