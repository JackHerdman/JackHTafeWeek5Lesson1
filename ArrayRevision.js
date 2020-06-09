//Create an array of objects called schools. Each school should have the following properties: name (string), address (string), headTeacher (object: title(string), lastName(string))
// Add a property called students to each schoolwhich is an object array. Each student has the following properties: firstName (string), lastName (string), age (number), yearGroup (number)
// Add a property called teachers to each school which is an object array. Each teacher has the following properties: title (string), lastName (string), subject (string)

let schools = [{
    Name: "Holy Cross College",
    Address: "Victoria Road, Ryde NSW 2112",
    headTeacher: { Title: "Mr", lastName: "Iforgot" },
    students: [{
        firstName: "James",
        lastName: "McIntyre",
        age: 17,
        yearGroup: 11
    }, {
        firstName: "Luke",
        lastName: "Jamieson",
        age: 14,
        yearGroup: 8
    }, {
        firstName: "Edward",
        lastName: "Boxes",
        age: 18,
        yearGroup: 12
    }, {
        firstName: "Joseph",
        lastName: "Bleak",
        age: 16,
        yearGroup: 10
    }, {
        firstName: "Effigy",
        lastName: "Demonsummoner",
        age: 2473,
        yearGroup: 8
    }],
    teachers: [{
        title: "Mr",
        lastName: "Brown",
        subject: "Maths"
    }, {
        title: "Ms",
        lastName: "Gomez",
        subject: "Music"
    }, {
        title: "Mr",
        lastName: "Michaels",
        subject: "Biology"
    }]
}, {
    Name: "Ryde Secondary School",
    Address: "Cressy Road, Ryde NSW 2112",
    headTeacher: { Title: "Mrs", lastName: "Noidea" },
    students: [{
        firstName: "Haley",
        lastName: "Simpson",
        age: 13,
        yearGroup: 7
    }, {
        firstName: "Jessica",
        lastName: "Rabbit",
        age: 16,
        yearGroup: 10
    }, {
        firstName: "Harrison",
        lastName: "Ford",
        age: 12,
        yearGroup: 7
    }],
    teachers: [{
        title: "Mr",
        lastName: "Luther",
        subject: "Physics"
    }, {
        title: "Mrs",
        lastName: "Green",
        subject: "Biology"
    }, {
        title: "Miss",
        lastName: "Felicia",
        subject: "Religion"
    }]
}];

// Q1 - Use for..of loop(s) to write out all the students with a yearGroup greater than 9
console.log("Question 1 - Students in year 9 or higher");
for (let school of schools) {
    for (let student of school.students) {
        if (student.yearGroup > 9) {
            console.log(student)
        }
    }
}
console.log();
// Q2 - Use for..of loop(s) to write out all the teachers that work at a school with 4 students or less
console.log("Question 2 - Teachers at a school with 4 students or less");
for (let school of schools) {
    if (school.students.length < 4) {
        console.log(school.teachers);
    }
}
console.log();
// Q3 - Use for..of loop(s) to write out the full names of all students who have an age of 12 and a yearGroup of 7
console.log("Question 3 - all students who are 12 and in year 7");
for (let school of schools) {
    for (let student of school.students) {
        if (student.age == 12 && student.yearGroup == 7) {
            console.log(`${student.firstName} ${student.lastName}`);
        }
    }
}
console.log();
// Q4 - Use for..of loop(s) and any other method you know to log how many students are in each yearGroup across all schools (assume yearGroup is a whole number from 0 - 12)
console.log("Question 4 - The number of students in each year");
let studentsPerYear = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let school of schools) {
    for (let student of school.students) {
        for (let i = 0; i < 12; i++) {          //
            if (student.yearGroup == i) {       //all of this can be written like
                studentsPerYear[i]++            // studentsPerYear[student.yearGroup]++;
            }                                   //
        }                                       //
    }                                           //
}
console.log(studentsPerYear)
for (let i = 0; i < studentsPerYear.length; i++) {
    if (studentsPerYear[i] == 0) {
        continue;
    }else if(i == 0){
        console.log(`Kindergarten has ${studentsPerYear[i]} students`)
    } console.log(`Year ${[i]} has ${studentsPerYear[i]} students`);

}