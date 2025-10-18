// Primitive
//String,number,boolean,null,undefined,symbol,bigint

const score=100
const scoreValue=100.3

const isLoggesIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const bigNumber=3434334535354534534564646464

///Non-Primitive(Reference)
//array,objects,functions

const fruits=["apple","banana","grapes"]

let myObj={name:"prerana",
    age:18,
    }


    const myFunction=function(){
    console.log("hello world");
    }


    console.log(typeof outsideTemp)



//Stack(primitive),Heap(Non-primitive)


let myName="prerana"
let anotherName=myName
anotherName="mayuri"
console.log(myName);
console.log(anotherName);

let userOne={
    email:"one@gmail.com",
    upi:"one@ybl"
}

let userTwo=userOne

userTwo.email="two@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);