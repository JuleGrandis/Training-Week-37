console.log("Task: A");

const taskAText = "Debugging is like being a detective in a crime drama where you are also the murderer";

for (let i = 0; i < 100; i++) {
    console.log(taskAText);
}

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
