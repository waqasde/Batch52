"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
const Student_1 = require("./Student"); // Assuming Student class is in Student.ts
const students = [];
function createStudent() {
    const name = readline.question('Enter student name: ');
    const student = new Student_1.Student(name);
    students.push(student);
    console.log(`Student created with ID: ${student.showStatus()}`);
}
function enrollInCourse() {
    const studentId = readline.question('Enter student ID: ');
    const course = readline.question('Enter course name: ');
    const student = students.find(s => s.showStatus().includes(studentId));
    if (student) {
        student.enrollCourse(course);
        console.log('Course enrolled successfully.');
    }
    else {
        console.log('Student not found.');
    }
}
function payFees() {
    const studentId = readline.question('Enter student ID: ');
    const amount = parseFloat(readline.question('Enter amount to pay: '));
    const student = students.find(s => s.showStatus().includes(studentId));
    if (student) {
        student.payTuition(amount);
        console.log('Payment successful.');
    }
    else {
        console.log('Student not found.');
    }
}
function showStudentStatus() {
    const studentId = readline.question('Enter student ID: ');
    const student = students.find(s => s.showStatus().includes(studentId));
    if (student) {
        console.log(student.showStatus());
    }
    else {
        console.log('Student not found.');
    }
}
function main() {
    let running = true;
    while (running) {
        console.log('\n1. Create new student\n2. Enroll in course\n3. Pay fees\n4. Show student status\n5. Exit');
        const choice = readline.question('Enter your choice: ');
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
