//const tinderUser=new Object();
const tinderUser={};
tinderUser.id="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);

const regularUser={
    email: "Some@gmail.com",
    fullName: {
        userFullName: {
        firstName: "Sudhir",
        lastName: "Rai"
    }
}
}

//console.log(regularUser.fullName.userFullName.firstName);

const obj1={1: "a",2: "b"};
const obj2={3: "a",4: "b"};
//const obj{obj1,obj2}
//const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2};

const Users=[
    {
        id: 1,
        email: "hitesh@gmail.com",
    },
    {
        id: 2,
        email: "hitesh@gmail.com",
    },
]
Users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//object Destructuring
const course={
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
//course.courseInstructor

// const {courseInstructor}=course;
// console.log(courseInstructor);

const {courseInstructor: instructor}=course;
console.log(instructor);

//Json ApI
// {
//     "name": "hitesh",
//     "courseName": "js in hindi",
//     "Price": "free"
// }

[
    {},
    {},
    {},
]