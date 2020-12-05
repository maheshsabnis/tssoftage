function doWork(x) {
    if(x) {
        let y = 10;
        console.log("Inside if y = " + y);
    }
    console.log("Outside if y = " + y);
}
doWork(true);
doWork(false);

for(let i=0;i<5;i++){
    console.log('in loop ' + i);
}
console.log('Out of loop ' + i);
i++;
console.log('Out of loop ' + i);