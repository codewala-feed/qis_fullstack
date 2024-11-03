
// let const var

var a = 10;
var a = 20;
a += 10
console.log(a);

const b = 20;
// const b  = 30;
// b += 20;
// console.log(b);

let c = 30;
// let c = 20;
c += 20;
console.log(c);


// String Number Boolean Array Object
_name = "qis";
console.log(_name);

num  = 10.5;
num2 = 100;
console.log(num, num2);

branch = "python"
console.log(`The branch is ${branch}`);

isVerified = true;
console.log(isVerified);

arr = [1, 2, 3, 4]
arr[2] = 300
arr.push(5)
arr.splice(1, 1)
console.log(arr);

data = {name: "qis", code: 523002}
data["city"] = "ongole"
console.log(data)



// loops

for (let i=5; i<=10; i++){
    console.log(i);
}
// console.log(`Accesing Block Scop variable ${i}`)

for (i=1; i<11; i+=2){
    console.log(i);
}

for (i=10; i>0; i--){
    console.log(i);
}
console.log("EVENS REVERSE")
for (i=10; i>0; i-=2){
    console.log(i);
}

console.log("ODDS REVERSE")
for (i=9; i>0; i-=2){
    console.log(i);
}

console.log("EVENS REVERSE")
k = 2
while (k<11){
    console.log(k)
    k += 2
}


odds = [ ]
for (start=1; start<11; start+=2){
    odds.push(start);
}

// odds = 1 3 5 7 9
odds[1] = 200 // 1 200 5 7 9
odds.splice(3, 2, 100) // 1 200 5 100
odds.pop() // 1 200 5
console.log(odds);

// ----------------------------------------------------

age = 23;
if (age>18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}

number = 12
if(number > 0){
    console.log("POsititve");
}
else if(number < 0){
    console.log("Negative");
}
else{
    console.log("Neutral");
}

num = 4
if (num>5 & num%2==0){
    console.log("Validated");
}
else{
    console.log("NOt validated");
}
// 1 to 5 = kid
// 6 to 10 = child
// 11 to 18 = boy
// 19 to 60 = man
// 61 to 100 = old
// > 100 = immortal
// rest of the numbers ---> Unborn
age = 4
if (age<=0){
    console.log("Unborn")
}
else if (age>=1 & age <=5){
    console.log("Kid")
}
else if( age>=6 & age<=10){
    console.log("Child")
}
else if( age>=11 & age<=18){
    console.log("Boy")
}
else if( age>=19 & age<=60){
    console.log("Man")
}
else if( age>=61 & age<=100){
    console.log("Old")
}
else{
    console.log("Immortal")
}



for (i=1; i<=5; i++){
    console.log(`for loop ${i}`)
}
console.log(`executed outside loop i ${i}`)

j = 1
while (j<=5){
    console.log(`while loop ${j}`)
    j++
}
console.log(`executed outside loop j ${j}`)

k = 1
do{
    console.log(`do while loop ${k}`)
    k++
}while(k<=5)
console.log(`executed outside loop  k ${k}`)
