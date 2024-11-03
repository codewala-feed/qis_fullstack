
// const let var
var a = 10;
var a = 30;
a += 20;
console.log(a);

let b = 30;
// let b = 40;
b += 20;
console.log(b);

const c = 50;
// const c = 40;
// c += 5;
console.log(c);


for (let i=1; i<11; i+=2){
        console.log(i);
}

j = 2
while (j < 11){
    console.log(j);
    j += 2;
    // j = j + 2
}

for (k=9; k>0; k-=2){
    console.log(k);
}

p = 100
do{
    console.log(p);
    p ++
}while(p < 105)



age = 12
if (age> 18){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}


number = 12
if (number > 0){
    console.log("Positive");
}
else if(number < 0){
    console.log("Negative");
}
else{
    console.log("Neutral");
}

// 1 to 5 = kid
// 6 to 10 = child
// 11 to 18 = boy
// 19 to 60 = man
// 61 to 100 = old
// > 100 = immortal
// rest of the numbers ---> Unborn

age = 0
if (age > 0 & age<6){
    console.log("Kid");
}
else if (age >= 6 & age <=10){
    console.log("Child")
}
else if (age >= 11 & age <=18){
    console.log("Boy")
}
else if (age >= 19 & age <=60){
    console.log("Man")
}
else if (age >= 61 & age <=100){
    console.log("Old")
}
else if (age > 100){
    console.log("Immortal")
}
else{
    console.log("Unborn")
}
console.log("-------------------------------------")

function add(num1, num2){
    res = num1 + num2
    console.log(res);
    return "done"
}
console.log(add(10, 20))
console.log(add(30, 40))
console.log(add(50, 50))
// -----------------------------------------------------
function add(num1, num2){
    res = num1 + num2
    console.log(res);
}
console.log(add(10, 20))
console.log(add(30, 40))
console.log(add(50, 50))
// ------------------------------------------------------------

evens = []
for (even=6; even<=10; even+=2){
    evens.push(even*10)
}
console.log(evens)
// -------------------------------------

even_product = []
for (even=6; even<=20; even++){
    product = even * 7
    if (product % 2 == 0){
        even_product.push(product)
    } 
}
console.log(even_product)