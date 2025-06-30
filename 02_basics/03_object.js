const mySym=Symbol("Key1");
const jsUser={
    name: "Hitesh",
    fullName: "Hitesh Choudary",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["eamail"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);

jsUser.email="hitesh@chatgpt.com";
//Object.freeze(jsUser);
jsUser.email="hitesh@microsoft.com";
console.log(jsUser);

jsUser.greeting = function (){
    console.log("Hello Js User");
}

jsUser.greeting = function (){
    console.log(`Hello Js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting);