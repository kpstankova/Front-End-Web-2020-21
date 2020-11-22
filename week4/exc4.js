class Person{
    constructor(){
        this.salary=1000;
    }
    stoleSalaryInfo(){
        let salary = this.salary;

        function getSecretSalaryInfo(){
            return salary;
        }
        return getSecretSalaryInfo();
    }
}