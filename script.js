let a=6;
let b=a;
a=4;
console.log(b);




let obj1={age:33};
let obj2=obj1;
obj1.age=22;
console.log(obj2.age);

let a1=true;
let a2=false;
if(a1 && a2){
    console.log("yes");
}
else{
    console.log("no");
}

function sum(a,b) {
    return a+b;
}
console.log(sum(22,11));

function double(num){
return num*2;
}

let arr=[2,3,4,5,6,7]
let doubled=arr.map(double);
console.log(doubled);

function odd(num){
  if(num%2==0){
    console.log("false");
  }
  else {
    console.log("true"); 
 }
}
let num=10;
odd(num);

function isOdd(num){
    return num%2!==0;
}
let oddnum=arr.filter(isOdd);
console.log(oddnum);

let array=[13,15,20,35,27];
let multiples=array.filter((n)=>n%5==0);
console.log(multiples);

let array1=[1,2,3,4,5,6];
let sum2=array1.reduce((product,current)=>{
    return product * current;
},1)
console.log(sum2);

let ar=[1,2,3,4,5,6,7,8];
let ans=ar.map((n)=>n*3)
        .filter((n)=>(n%2==0))
        .reduce((product,current)=>{
    return product + current;
},0)
console.log(ans);

let des=[1,2,3,4,5];
const[one,...two]=des;
console.log(two);
let nnum2=[0,...des,6,7]
console.log(nnum2);

const objj1={x:3,y:5}
const objj2={y:6,z:7}
const spread={...objj1,...objj2}
console.log(spread);

const promise=new Promise((resolve,reject)=>{
     setTimeout(()=>{
        const success=true;
        if(success){
            resolve("Resolved successfully");
        }
        else{
            reject("rejected");
        }
    },2000)

    
})
console.log("before promise execution");
promise.then((result)=>console.log(result))
       .catch(err=>console.log(err))
       .finally(()=>(console.log("Promise completed")))

console.log("After promise execution");


fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {return response.json()})
      .then((data)=> data.map((user)=>{console.log(user.name)}))
      .catch((err)=>console.log(err))



let name='mad';
let age=19;
console.log(` I am ${name} and my age is ${age}`);

const mul=(a,b)=>{
    return a*b;
}
const square=(n)=>{
    return mul(n,n);
}
const print=(n)=>{
    let s=square(n);
    console.log(s);
}
print(4);
//event loop

console.log("first");
Promise.resolve().then(console.log("From promises"))
setTimeout(()=>{
    console.log("Inside Timeout");
},2000);

console.log("last");














