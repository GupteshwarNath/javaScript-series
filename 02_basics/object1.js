// singleton
//object.create
//object literals

const mySym = Symbol("key1")


const JsUser={
    name:"Gupteshwar",
    "full name": "Gupteshwar Nath Prajapati",
    [mySym]: "mykey1",
    age: 24,
    location:"Bhilai",
    email:"gupteshwardln123@gmail.com",
    isLoggedin: false,
    lastLoginDays:["Monday","saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email="gupteshwardln@gmail.com"
// Object.freeze(JsUser);
JsUser.email="gupteshwardln@gmail.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo=function(){
console.log('Hello JsUser,${this.name}');
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// console.log(JsUser.greeting);
