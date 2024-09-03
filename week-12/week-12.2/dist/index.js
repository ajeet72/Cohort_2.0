"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "john", age: 20 }, { name: "doe", age: 33 });
console.log(age);
