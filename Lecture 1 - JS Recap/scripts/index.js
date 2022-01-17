const userName = "Ramsey"; //String
let age = 30; // Number
let haveHobby = true; //Boolean
let F2022 = undefined;
let F2022f1 = null;

console.log(userName);

let person = {
  name: "Sam",
  age: 21,
  hobbies: ["eat", "sleep", "code", "repeat"],
  intro() {
    console.log("Hi, I am " + this.name + " I am a web developer");
  },
};

console.log(person.hobbies[0]);

person.hobbies[4] = "drink coffee";

console.log(person.hobbies[4]);

// function greeting(studentName) {
//   console.log(studentName + ", Hello welcome to the class");
// }

greeting = (studentName) => {
  console.log(studentName + ", Hello welcome to the class");
};

greeting("Sam");
greeting("John");
greeting("David");

person.intro();
