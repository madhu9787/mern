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

