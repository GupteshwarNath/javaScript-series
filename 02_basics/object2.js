// const tinderUser=new Object()

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"gupteshwardln123@gmail.com",
       fullname:{
        userfullname:{
           firstname:"Gupteshwar",
           lastname:"prajapati",
        }
   }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj4={obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2,obj4)
const obj3={...obj1, ...obj2}
// console.log(obj3)

const users=[
    {
        id:1,
        email:"G@gmail.com"
    },
    {
        id:1,
        email:"G@gmail.com"
    },
    {
        id:1,
        email:"G@gmail.com"
    }
    
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Object de-structure and JSON

const course={
    coursename:"Js in hindi",
    Price:"999",
    courseInstructor:"Gupteshwar"
}
// course.courseInstructor

// const{courseInstructor}=course
// console.log(courseInstructor);

{
    "name": "Gupteshwar",
    "coursename":"Js In hindi",
    "price":"free"
}
//randomuser me API

//JSON formatter

// [
//     {}
//     {}
//     {}
// ]

