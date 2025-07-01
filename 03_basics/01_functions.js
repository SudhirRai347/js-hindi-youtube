// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3,4);

function addTwoNumbers(num1,num2) {
    let result=num1+num2;
    return result;
    //return num1+num2;
}
const result=addTwoNumbers(3,5);
console.log("Result",result);

function loginUserMessage(userName){
    return `${userName} just logged in`
}
console.log(loginUserMessage("Hitesh"));
console.log(loginUserMessage());
