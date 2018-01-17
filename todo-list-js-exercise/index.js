// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// ------------------------

// Using an object to keep track of state instead of multiple arrays
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState() {
      console.log(`${this.title} has${this.complete ? " "  : " not "}been completed`);
    },
     markCompleted() {
      this.complete = true;
    },
  };
  return task;
}
// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the poops out of the litter box");
const task2 = newTask("Do Laundry", "boo");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);