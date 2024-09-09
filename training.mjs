
//#region Task A
console.log("Task: A");

const taskAText = "Debugging is like being a detective in a crime drama where you are also the murderer";

for (let i = 0; i < 100; i++) {
    console.log(taskAText);
}
//#endregion

//#region Task B
console.log("Task: B");

const startBottles = 99;
for (let index = startBottles; index > 0; index--) {
    console.log(index + " bottles of soda on the shelf!");
    console.log(index + " bottles of soda on the shelf!");

    console.log(
        "Take one down, pass it around." + (index - 1) + " bottles of soda on the shelf!"
    );
    console.log("");
}

console.log("No more bottles of soda on the shelf.");
//#endregion

//#region Task C
console.log("Task C");

const G = 9.81;
const PI = 3.14159265359;
let peopleInTheRoom = 50;

console.log(G);
console.log(PI);
console.log(peopleInTheRoom);
//#endregion

//#region Task D
console.log("Task D");

function add(a, b) {
    return a + b;
}

console.log("3 + 6 = " + add(3, 6));
console.log("5673 + 234 = " + add(5673, 234));
//#endregion

//region Task E
