"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    id;
    courses;
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
        this.courses = [];
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students;
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
    }
}
class Department {
    name;
    courses;
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student("Jonh", 22, 12234);
const student2 = new Student("Mrash", 20, 12256);
const instructor1 = new Instructor("Alex", 33, 40000);
const instructor2 = new Instructor("Morgan", 38, 46000);
const course1 = new Course(1, "JavaScript");
const course2 = new Course(2, "Advance Programming");
const department1 = new Department("Computer Science");
department1.addCourse(course1);
department1.addCourse(course2);
student1.registerForCourse(course1);
student2.registerForCourse(course1);
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
console.log(student1.getName()); // Output: Jonh
console.log(student1.courses); // Output: [Course]
console.log(instructor1.courses); // Output: [Course]
console.log(department1.courses); // Output: [Course, Course]
