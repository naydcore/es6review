// 1. Modularity (Breaking Code into Small Parts)
export function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Classes (Making Blueprints for People)
export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

// 3. Async/Await (Waiting for Something to Finish)
export async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data loaded successfully!"), 2000);
    });
}

// 4. Promises (Handling Success or Failure)
export function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            success ? resolve("Promise resolved!") : reject("Promise rejected!");
        }, 1500);
    });
}

// 5. Maps (Storing Things with Labels)
export const userRoles = new Map();
userRoles.set("Alice", "Admin");
userRoles.set("Bob", "User");
