// Import everything from tools.js
import { greet, Person, fetchData, getData, userRoles } from './tools.js';

// 1. Test Modularity
console.log(greet("Alice")); // "Hello, Alice!"

// 2. Test Class
const bob = new Person("Bob", 30);
console.log(bob.introduce()); // "Hi, I'm Bob and I'm 30 years old."

// 3. Test Async/Await
(async () => {
    console.log(await fetchData()); // "Data loaded successfully!" (after 2 seconds)
})();

// 4. Test Promises
getData()
    .then(message => console.log(message)) // "Promise resolved!" (after 1.5 seconds)
    .catch(error => console.log(error));

// 5. Test Maps
console.log(userRoles.get("Alice")); // "Admin"
console.log(userRoles.get("Bob"));   // "User"
