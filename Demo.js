class Person{
    constructor(){
        this._age_=0;
    }
    get age()
    {
        console.log("getter age");
        return this._age_;
    }
    set age(page)
    {
        console.log("setter age");
        this._age_=page;
    }

}
var p1=new Person(15);
//p1.age=15;
console.log("age is : "+p1.age);


