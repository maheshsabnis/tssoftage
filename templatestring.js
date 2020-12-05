var fname = "Mahesh"; // implicit type declaration based on RHS value 
var mname = "Rameshrao";
var lname = "Sabnis";
var Address; // explicit type declarartion
Address = "Pune";
//traditional concatination of JavaScript
var info1 = fname + ' ' + mname + ' ' + lname + ' ' + Address;
console.log(info1);
console.log();
console.log('Using Template String');
var infor2 = fname + " " + mname + " " + lname + " " + Address;
console.log(infor2);
