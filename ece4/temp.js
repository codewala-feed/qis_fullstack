
// var, let, const

var a = 10;
var a = 20;
a += 5;
console.log(a)

let b = 20;
// let b = 30;
b += 10;
console.log(b)

const c = 40;
// const c = 50;
// c += 5
console.log(c)


// Number, String, Boolean, Array, Object
age = 22
age += 2
console.log("age is ${age}")
console.log(`${age} is Age`)

salary = 120000.500
salary += 300.500
console.log(`Salary is ${salary}`)

course = "Flask"
course += " "
course += "CRT"
console.log(`This is ${course}`)

isVerified = true
console.log(isVerified)

nums = [1, 2, 3, 40]
nums.push(5) // 1 2 3 40 5
nums.splice(2, 2) // 1 2 5
nums.pop() // 1 2
nums.splice(0, 0) // 1 2
nums.splice(0, 1) // 2
console.log(`Numbers are ${nums}`)


data = {"course": "Flask", "age": 22}
data["branch"] = "ece"
data["age"] = 25
console.log(data)


// loops
console.log("5 to 10")
for(i = 5; i <= 10; i++){
    console.log(i);
}

console.log("5 to 0")
for (i=5; i>0; i--){
    console.log(i);
}

console.log("15 to 20")
i = 15;
while(i<=20){
    console.log(i);
    i++
}

console.log("10 to 5")
i = 10;
while(i>=5){ // 
    console.log(i);
    i--
}
console.log("From 1 to 15")
for (i=1; i<=15; i++){
    console.log(i);
}

console.log("From 19 to 7");
for (i=19; i>=7; i--){
    console.log(i);
}

console.log("From 14 to 15");
for(i=14; i<=15; i++){
    console.log(i);
}

console.log("From -9 to 9");
i = -9
while(i<=9){
    console.log(i);
    i++
}

console.log("From 9 to -9");
i = 9
while(i>=-9){
    console.log(i);
    i--
}


k = 30
do{
    console.log(`Do while ${k}`);
    k++ ; 
}while(k<=10)
console.log(`Do while Outside ${k}`);



for(i=1; i<=5; i++){
    console.log(`${i}) python fullstack`)
}

for(i=1; i<=10; i++){
    if (i%2==0){
        console.log(`even: ${i}`)
    }
}

for(i=2; i<=10; i+=2){
    console.log(`even: ${i}`)
}

for(i=1; i<=10; i+=2){
    console.log(`odd: ${i}`)
}

even_arr = []
for(even=6; even<=10; even+=2){
    even_arr.push(even * 10)
}
console.log(even_arr)

arr = []
for (i=6; i<=20; i++){
    product = i * 7
    if (product%2 == 0){
        arr.push(product)
    }
}
console.log(arr)

console.log("---------------------------------")

function add(num1, num2){
    res = num1 + num2;
    console.log(res);
    return "done"
}

console.log(add(10, 20))
console.log(add(30, 40))
add(50, 50)