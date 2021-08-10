function Employee(eId,eName,eSal){
    this.empId=eId;
    this.empName=eName;
    this.empSal=eSal;
    this.calAnnualEmpSal=function(){
        return (12*this.empSal);
    }
}
