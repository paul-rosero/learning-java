/*
  WRITE YOUR SOLUTION HERE
*/
const admin = Symbol("adminUser")

const user = {
  admin: true,
  [Symbol("username")]: "myusername",
  [Symbol("password")]: "mypassword",
  age: 21
}
console.log(user.adminUser)
console.log(user.username);
console.log(user.password);
console.log(user.age)