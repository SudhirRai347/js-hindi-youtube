//if
// const isuserLoggedIn=true;
// const temperature=41;
// if(temperature===41){
//     console.log("temperature is greater than 50");
// }
// console.log("execute");

// const score=200;
// if(score>100){
//     const power="fly";
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);

// const balance=1000;
// //if(balance>500) console.log("Test"),console.log("test2")

// if(balance<500){
//     console.log("less than 500");
// } else if(balance<750) {
//     console.log("less than 750");
// } else if(balance<900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn=true;
const debitCard=true;
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

const loggedInFromGoogle=false;
const loggedInFromEmail=true;
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}