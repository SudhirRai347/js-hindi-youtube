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
//console.log("Result",result);

function loginUserMessage(userName="sam"){
    if(!userName){
        console.log("Please enter username");
        return;
    }
    return `${userName} just logged in`
}
//console.log(loginUserMessage("Hitesh"));
//console.log(loginUserMessage());

function calculatorCartPrice(val1,val2,...num1){
    return num1;
}
//console.log(calculatorCartPrice(200,300,300,400,500));

const User={
    userName: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}
//handleObject(user);
handleObject({
    userName: "sam",
    price: 399
})

const myNewArray=[200,400,100,600];
function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));