
//#region Task A
console.log("Task: A");

const taskAText = "Debugging is like being a detective in a crime drama where you are also the murderer";

for (let i = 0; i < 100; i++) {
    console.log(taskAText);
}
//#endregion
addSpacing(1);
//#region Task B
console.log("Task: B");

const startBottles = 99;
for (let index = startBottles; index > 0; index--) {
    console.log(index + " bottles of soda on the shelf");
    console.log(index + " bottles of soda");

    console.log(
        "Take one down, pass it around, " + (index - 1) + " bottles of soda on the shelf."
    );
    console.log("");
}

console.log("No more bottles of soda on the shelf.");
//#endregion
addSpacing(1);
//#region Task C
console.log("Task: C");

const G = 9.81;
const PI = 3.14159265359;
let peopleInTheRoom = 50;

console.log(G);
console.log(PI);
console.log(peopleInTheRoom);
//#endregion
addSpacing(1);
//#region Task D
console.log("Task: D");

function add(a, b) {
    return a + b;
}

console.log("3 + 6 = " + add(3, 6));
console.log("5673 + 234 = " + add(5673, 234));
//#endregion
addSpacing(1);
//#region Task E
console.log("Task: E");

const people = ["Tony", "Christian", "Håkon"];

for(let i = people.length - 1; i >= 0; i--) {
    console.log(people[i]);
};
//#endregion
addSpacing(1);
//#region Task F
console.log("Task: F")

let phoneNumbers = ["+4790611545", "+4797410577", "+4799643188"];

console.log(phoneNumbers);
//#endregion
addSpacing(1);
//#region Task G
console.log("Task: G");

phoneNumbers = phoneNumbers.slice(2, 3);
console.log(phoneNumbers);
//#endregion
addSpacing(1);
//#region Task H
console.log("Task: H");

let peopleNames = [["Christian", "Simonsen"], ["Tony", "Bergholtz"]]

for (let i = 0; i < peopleNames.length; i++) {
    console.log(peopleNames[i][1]);
}
//#endregion

//#region Util Function
function addSpacing(lines = 1) {
    for (let i = 0; i < lines; i++){
        console.log("")
    }
}
//#endregion