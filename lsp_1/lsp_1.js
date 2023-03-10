let a = 20;
let b = 60;
let c = 10;

console.log("nilai a: " + a); 
console.log("nilai b: " + b); 
console.log("nilai c: " + c); 

let arr = [a, b, c];
arr.sort(function(x, y) {
    return x-y;
});

console.log("ascending : " + arr);
arr.reverse();
console.log("descending : " + arr);

let max = Math.max(a, b, c);
console.log("Nilai max : " + max);

let min = Math.min(a, b, c);
console.log("Nilai min : " + min);

let average = (a + b + c) / 3;
console.log("Rata-rata : " + average);