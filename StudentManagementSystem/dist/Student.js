"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    static nextId = 10000; // Static variable for generating unique IDs
    name;
    studentID;
    courses = [];
    balance = 0;
    constructor(name) {
        this.name = name;
        this.studentID = this.generateStudentID();
    }
    generateStudentID() {
        return (Student.nextId++).toString();
    }
    enrollCourse(course) {
        this.courses.push(course);
        this.balance += 600; // Assuming a fixed fee for each course
    }
    viewBalance() {
        return this.balance;
    }
    payTuition(amount) {
        this.balance -= amount;
    }
    showStatus() {
        return `Name: ${this.name}\nID: ${this.studentID}\nCourses: ${this.courses.join(', ')}\nBalance: $${this.balance}`;
    }
}
exports.Student = Student;
