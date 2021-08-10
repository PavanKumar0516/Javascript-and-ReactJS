var sum = function(){
    var a=70;
    var b=30;
    return (a+b);
}
var sum=()=>{
    var a=70;
    var b=30;
    return (a+b);

}
var show=()=>console.log("welcome");
console.log(sum());
console.log(show());
var add=(a,b)=>{
    return (a+b);
}
console.log("Addition "+add(50,70));
//---------------------------
let Employee=
{
    age:42,
    getAge:function(){
        return this.age;
    }
}
let unboundedGetAge=Employee.getAge;
console.log("unbounded : "+ unboundedGetAge());

let boundedGetAge=unboundedGetAge.bind(Employee);
console.log("bounded : "+ boundedGetAge());

//---------------------------------------------
let user={
    firstName:"pavan",
    sayHi:function(){
        console.log(`hello :${this.firstName}`);
    }
}
var callHi=user.sayHi;
var bindCall=callHi.bind(user);
setTimeout(bindCall,2000);