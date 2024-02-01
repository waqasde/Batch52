"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var Student_1 = require("./Student"); // Assuming Student class is in Student.ts
var students = [];
function createStudent() {
    var name = readline.question('Enter student name: ');
    var student = new Student_1.Student(name);
    students.push(student);
    console.log("Student created with ID: ".concat(student.showStatus()));
}
function enrollInCourse() {
    var studentId = readline.question('Enter student ID: ');
    var course = readline.question('Enter course name: ');
    var student = students.find(function (s) { return s.showStatus().includes(studentId); });
    if (student) {
        student.enrollCourse(course);
        console.log('Course enrolled successfully.');
    }
    else {
        console.log('Student not found.');
    }
}
function payFees() {
    var studentId = readline.question('Enter student ID: ');
    var amount = parseFloat(readline.question('Enter amount to pay: '));
    var student = students.find(function (s) { return s.showStatus().includes(studentId); });
    if (student) {
        student.payTuition(amount);
        console.log('Payment successful.');
    }
    else {
        console.log('Student not found.');
    }
}
function showStudentStatus() {
    var studentId = readline.question('Enter student ID: ');
    var student = students.find(function (s) { return s.showStatus().includes(studentId); });
    if (student) {
        console.log(student.showStatus());
    }
    else {
        console.log('Student not found.');
    }
}
function main() {
    var running = true;
    while (running) {
        console.log('\n1. Create new student\n2. Enroll in course\n3. Pay fees\n4. Show student status\n5. Exit');
        var choice = readline.question('Enter your choice: ');
        switch (choice) {
            case '1':
                createStudent();
                break;
            case '2':
                enrollInCourse();
                break;
            case '3':
                payFees();
                break;
            case '4':
                showStudentStatus();
                break;
            case '5':
                running = false;
                break;
            default:
                console.log('Invalid choice.');
        }
    }
}
main();
