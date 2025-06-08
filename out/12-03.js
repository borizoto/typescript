"use strict";
// 12. Simple Task Tracker with Access Control
// Create a class Task with:
// • title: string
// • description: string
// • completed: boolean (default: false)
// • private property createdBy: string
// Use getters and setters:
// • Get createdBy only with a getter
// • Add method toggleStatus(): void to switch completed status
// • Add method getDetails(): string to return information about a task in the format "Task: <title> -
// <description> - <Completed | Pending>"
// Also create a static method createSampleTasks(): Task[]
// that returns an array with at least two example tasks.
class Task {
    title;
    description;
    completed = false;
    _createdBy;
    constructor(title, description, createdBy) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }
    get createdBy() {
        return this._createdBy;
    }
    toggleStatus() {
        this.completed = !this.completed;
    }
    getDetails() {
        return `Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`;
    }
    static createSampleTasks() {
        return [
            new Task('Bought Orbea Laufey H10', 'Today i bought my first MTB', 'Boce'),
            new Task('Showed my friend my new bike', 'Showed Boyan my new bike', 'Boris')
        ];
    }
}
const taskA = new Task("Complete homework", "Finish math exercises", "Charlie");
taskA.toggleStatus();
console.log(taskA.getDetails());
const taskB = new Task("Clean room", "Clean the room", "Mary");
console.log(taskB.getDetails());
const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));
//# sourceMappingURL=12-03.js.map