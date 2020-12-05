// Arrow operator is used as a parameter to a function, if the function is accepting
// the input parameter as callback funciton

let names = ["Mahesh", "Ajay", "Kumar", "Vibhi", "Renu", "Kapil", "Manish"];

// list out only those names having 'a' in it
// writing a separate function and passing it as input parameter 
names.forEach(printName);

function printName(n,i){
    console.log(`Name at ${i}th position = ${n}`);
}
console.log('Using Callback');

names.forEach(function(n,i){
    console.log(`Name at ${i}th position = ${n}`);
});
console.log('USing ES 6 arrow operator');
names.forEach((n,i)=>{
    console.log(`Name at ${i}th position = ${n}`);
});
