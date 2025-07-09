const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('async task is completed');
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolve");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username: "hitesh", password: "123" });
        } else {
            reject('ERROR: Something went wrong');
        }
    },100)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
})