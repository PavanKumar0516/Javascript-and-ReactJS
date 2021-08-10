class Employee
{
    constructor()
    {
        this._empId_=0;
        this._empName_="";
        this.empSal;

    }

    get empId()
    {
        console.log("getter eid");
        return this._empId_;
    }
    set empId(eid)
    {
        console.log("setter eid");
        this._empId_=eid;
    }
    get empName()
    {
        console.log("getter name");
        return this._empName_
    }
    set empName(ename)
    {
        console.log("setter name");
        this._empName_=ename;
    }
    getEmpSal()
    {
        console.log("getter salary");
        return this.empSal;
    }
    setEmpSal(eSal)
    {
        console.log("setter salary");
        this.empSal=eSal;
    }
    calcAnnualSal()
    {
        return (12*this.empSal);
    }
    
}

class Manager extends Employee{
    constructor(){
        super();
        this._deptName_="";
    }
    get deptName(){
        return this._deptName_;
    }
    set deptName(dname){
        this._deptName_=dname;
    }
}

//----------------------------------
var emp1=new Employee();
emp1.empId=112057;
emp1.empName="pavankumar";
emp1.setEmpSal(2000);
console.log("ID : "+emp1.empId+" Name : "+emp1.empName+" Salary : "+emp1.getEmpSal()+" AnnualSalary : "+emp1.calcAnnualSal());

//-----------------------
var e2=new Manager()
e2.empId=999;
e2.empName="jagadish";
e2.setEmpSal(5000);
e2.deptName="administration"
console.log("ID : "+e2.empId+" Name : "+e2.empName+" Salary : "+e2.getEmpSal()+" AnnualSalary : "+e2.calcAnnualSal()+" Department : "+e2.deptName);
