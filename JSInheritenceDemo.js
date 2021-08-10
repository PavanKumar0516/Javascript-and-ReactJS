function Employee(eId,eName,eSal){
    this.empId=eId;
    this.empName=eName;
    this.empSal=eSal;
    this.calAnnualEmpSal=function(){
        return (12*this.empSal);
    }

}
function Manager(dName){
    this.deptName=dName;
    this.setDeptName=function(dn){
        this.deptName=dn;
    }
    this.getDeptName=function(){
        return this.deptName;
    }
}
//---inherit manager from employee----
Manager.prototype=new Employee(112071,"pavankumar",5000);
var pavankumar=new Manager