// Array methods
var characters = [
    "James Bond", "Indiana Jones", "Ethan Hunt",
    "Jason Bourn", "Captain Amerika", "Iron Man"
];
// list out values from array having length greate than 10
for (var i in characters) {
    if (characters[i].length > 10) {
        console.log(characters[i]);
    }
}
// using ES 6 methods
var result = characters.filter(function (n, i) {
    // return value from array having length greae than 10 and put these values in
    // new array
    return n.length > 10;
});
console.log(JSON.stringify(result));
console.log("Sorting array " + JSON.stringify(characters.sort()));
console.log("Reversing array " + JSON.stringify(characters.reverse()));
