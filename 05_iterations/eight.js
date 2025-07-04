const myNums=[1,2,3];
// const myTotal=myNums.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc+currVal;
// },0)

// const myTotal=myNums.reduce((acc,curr)=>arr+curr,0)
// console.log(myTotal);

const ShoppingCart=[
    {
        itemName: "jsCode",
        price: 2999
    },
    {
        itemName: "mobileCourse",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay=ShoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(priceToPay);
