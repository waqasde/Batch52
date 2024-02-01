"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name) {
        this.courses = [];
        this.balance = 0;
        this.name = name;
        this.studentID = this.generateStudentID();
    }
    Student.prototype.generateStudentID = function () {
        return (Student.nextId++).toString();
    };
    Student.prototype.enrollCourse = function (course) {
        this.courses.push(course);
        this.balance += 600; // Assuming a fixed fee for each course
    };
    Student.prototype.viewBalance = function () {
        return this.balance;
    };
    Student.prototype.payTuition = function (amount) {
        this.balance -= amount;
    };
    Student.prototype.showStatus = function () {
        return "Name: ".concat(this.name, "\nID: ").concat(this.studentID, "\nCourses: ").concat(this.courses.join(', '), "\nBalance: $").concat(this.balance);
    };
    Student.nextId = 1000; // Static variable for generating unique IDs
    return Student;
}());
exports.Student = Student;
