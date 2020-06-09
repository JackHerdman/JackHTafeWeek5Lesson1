// Create an array of names
let names = [
    "Aragorn",
    "Legolas",
    "Gimli",
    "Felicia",
    "Gandalf",
    "Bob",
    "Jeff"
];

// Create an array of numbers
let numbers = [14, 7, 32, 76, 15, 22, 1];

// Q1 - Write some code to find the first name in the names array that starts with an "F"
console.log("Question 1 - first name starting with F");
let nameStartingWithF = names.find(element => element[0] == "F");
console.log(nameStartingWithF);
console.log();
// Q2 - Write some code to find the first number in the numbers array that is smaller than 10
console.log("Question 2 - first number smaller than 10");
let lessThan10 = numbers.find(element => element < 10)
console.log(lessThan10);
console.log();
// Q3 - Write some code to find all the names that are 4 or less characters long
console.log("Question 3 - all names with 4 characters or less");
let longerThan4 = names.filter(element => element.length <= 4)
console.log(longerThan4);
console.log();
// Q4 - Write some code to find all the numbers in the numbers array that are divisible by 3
console.log("Question 3 - all numbers divisible by 3");
let divisibleBy3 = numbers.filter(element => element % 3 == 0)
console.log(divisibleBy3);
console.log();
// Create an array of people with the following properties: firstName, lastName, age
let people = [{
    firstName: "Alexander",
    lastName: "Rider",
    age: 29
}, {
    firstName: "Isla",
    lastName: "Wildman",
    age: 2
}, {
    firstName: "John",
    lastName: "Doe",
    age: 10
}, {
    firstName: "Felicity",
    lastName: "Jones",
    age: 7
}, {
    firstName: "Frodo",
    lastName: "Baggins",
    age: 33
}];

// Q5 - Write some code to find the first person that is under 18 years old and log their full name;
console.log("Question 5 - name of the first person under 18");
function functionUnder18(person) {
    if (person.age < 18) {
        return person;
    }
}
let firstUnder18 = people.find(functionUnder18);
// let firstUnder18 = people.find(person => person.age < 18);
console.log(`${firstUnder18.firstName} ${firstUnder18.lastName}`);
console.log();

// Q6 - Write some code to get an array of all the people that have more than 10 characters in their first and last names combined (eg. Luke Parker has exactly 10 characters and should not be included)
console.log("Question 6 - new Array of people with more than 10 characters");
function tenCharacters(person) {
    if ((person.firstName.length + person.lastName.length) > 10) {
        return person;
    }
}
let tenOrMore = people.filter(tenCharacters);
// let tenOrMore = people.filter(person => (person.firstName.length + person.lastName.length) > 10);
console.log(tenOrMore);
console.log();

// Q7 - Write some code to find all the people that have their last name longer than their first name.
console.log("Question 7 - last names longer than first names");
function longerLastName(person) {
    if (person.firstName.length < person.lastName.length) {
        return person;
    }
}
let longLastNames = people.filter(longerLastName);
// let longLastNames = people.filter(person => (person.firstName.length < person.lastName.length));
console.log(longLastNames);
console.log();

//.find     first element in array
//.filter   all elements in array that match
//.some     returns boolean if some are true
//.every    returns boolean if all are true
console.log();
console.log();
// Q1 - Create an array of numbers. Use array extension methods to find whether all the elements in the array have a value that is not divisible by 5
console.log("Question 1 - All not divisible by 5?");
let fiveNumbers = [1, 404, 44, 3, 2, 19, 37];
let divisibleByFive = fiveNumbers.every(number => number % 5 != 0)
console.log(divisibleByFive)
console.log();

// Q2 - Create an array of strings. Use array extension methods to find whether any of the elements begin with a vowel.
console.log("Question 2 - Starts with a Vowel?");
let vowelWords = ["The", "Lord", "of", "the", "Rings"];
let startsWithVowel = vowelWords.some(string => string[0].toLowerCase() == "o" || string[0].toLowerCase() == "e" || string[0].toLowerCase() == "i" || string[0].toLowerCase() == "o" || string[0].toLowerCase() == "u");
console.log(startsWithVowel);
console.log();

// Q3 - Create an array of pets (name, age, owner) and use array extension methods to find whether any of the pets are owned by Luke.
console.log("Question 3 - Any pets owned by Luke");
let pets = [{
    name: "Quackers",
    age: 15,
    owner: "Samantha",
}, {
    name: "Rex",
    age: 3,
    owner: "Luke"
}, {
    name: "Knox",
    age: 4,
    owner: "Alex"
}, {
    name: "Felix",
    age: 15,
    owner: "Luke"
}];
let ownedByLuke = pets.some(pet => pet.owner == "Luke");
console.log(ownedByLuke);
console.log();

// Q4 - Jimmy is scared of the letter Q, write some code that takes in an array of pet objects (name, age, owner) and tells Jimmy's parents if the array contains any pets that have a name or owner with the letter Q. You must use a for..in loop for this.
console.log("Question 4 - has a Q in it?");

hasQ = pets.some(pet => {
    for(let propertyName in pet){
        if(pet[propertyName].toString().toLowerCase().includes("q")){
            return true;
        }
    }
})


// hasQ = pets.some(pet => pet.name.toLowerCase().includes("q") || pet.owner.toLowerCase().includes("q"));
console.log(hasQ);
console.log();