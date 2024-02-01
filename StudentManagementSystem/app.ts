import * as readline from 'readline-sync';
import { Student } from './Student'; // Assuming Student class is in Student.ts

const students: Student[] = [];

function createStudent(): void {
    const name = readline.question('Enter student name: ');
    const student = new Student(name);
    students.push(student);
    console.log(`Student created with ID: ${student.showStatus()}`);
}

function enrollInCourse(): void {
    const studentId = readline.question('Enter student ID: ');
    const course = readline.question('Enter course name: ');
    const student = students.find(s => s.showStatus().includes(studentId));
    if (student) {
        student.enrollCourse(course);
        console.log('Course enrolled successfully.');
    } else {
        console.log('Student not found.');
    }
}

function payFees(): void {
    const studentId = readline.question('Enter student ID: ');
    const amount = parseFloat(readline.question('Enter amount to pay: '));
    const student = students.find(s => s.showStatus().includes(studentId));
    if (student) {
        student.payTuition(amount);
        console.log('Payment successful.');
    } else {
        console.log('Student not found.');
    }
}

function showStudentStatus(): void {
    const studentId = readline.question('Enter student ID: ');
    const student = students.find(s => s.showStatus().includes(studentId));
    if (student) {
        console.log(student.showStatus());
    } else {
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
