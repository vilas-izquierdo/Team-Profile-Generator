const Employee = require("../lib/Employee");


class Manager extends Employee{
    constructor(name, id, email, officenumber)
    {super(name, id, email);
    this.officenumber = officenumber;}

getRole(){
    return "Manager";
}
getofficenumber(){
    return this.officenumber;
}
}


module.exports = Manager;