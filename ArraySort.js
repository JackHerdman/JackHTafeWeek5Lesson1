let numbers = [12, 9, 8];
console.log(numbers);
console.log(numbers.sort()); //converts to strings and sorts in order 

function compareNumbers(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else {
        return 0;
    }
}
console.log(numbers.sort(compareNumbers)); // every time to sort numbers you need to have the above function
console.log(numbers.sort((num1, num2) => num1 - num2));

console.log();
// Q1 - Create an array of numbers and sort them from largest to smallest
console.log("Question 1 - Sort numbers large to small ");
let myNumbers = [23, 4, 506, 20, 1, 56];
console.log(myNumbers.sort((num1, num2) => num2 - num1));
console.log();

// Q2 - Create a sort function that will sort the following array of events into chronological order:
let events = [
    {
        name: "Went on holiday",
        month: 4,
        year: 2019
    }, {
        name: "Got first car",
        month: 5,
        year: 2019
    }, {
        name: "Moved out of home",
        month: 5,
        year: 2015
    }
];
console.log("Question 2 - Sort events in Chronological order");
let chronologicalOrder = events
.sort((num1, num2) => num1.month - num2.month)
    .sort((num1, num2) => num1.year - num2.year);
console.log(chronologicalOrder);
console.log();

// Q3 - Sort the following array in alphabetical order by last name, then by first name
let people = [
    {
        firstName: "Margaret",
        lastName: "Cox"
    }, {
        firstName: "Aaryan",
        lastName: "Bauer"
    }, {
        firstName: "Asma",
        lastName: "Bauer"
    }, {
        firstName: "Jazmin",
        lastName: "Flowers"
    }
];

console.log("Question 3 - Sort names in Alphabetical Order last name first");
let alphabeticalOrder = people
.sort((person1, person2) => person1.firstName.toLowerCase() > person2.firstName.toLowerCase())
.sort((person1, person2) => person1.lastName.toLowerCase() > person2.lastName.toLowerCase());
console.log(alphabeticalOrder)
console.log();
