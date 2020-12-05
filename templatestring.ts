let fname="Mahesh"; // implicit type declaration based on RHS value 
let mname="Rameshrao";
let lname="Sabnis";

let Address:string; // explicit type declarartion
Address = "Pune";
//traditional concatination of JavaScript
let info1 = fname + ' ' + mname + ' ' + lname + ' ' + Address ;
console.log(info1);
console.log();
console.log('Using Template String');
let infor2 = `${fname} ${mname} ${lname} ${Address}`;
console.log(infor2);