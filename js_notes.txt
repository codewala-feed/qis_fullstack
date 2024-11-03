
// // var, let, const

// var a = 10;
// var a = 20;
// a += 5;
// console.log(a);

// let b = 20;
// // let b = 30;
// b += 10;
// console.log(b);

// const c = 40;
// // const c = 50;
// // c += 5;
// console.log(c);


// // Number, String, Boolean, Array, Object
// age = 22;
// console.log(`Age is ${age}`);

// salary = 120000.500;
// salary += 300.500 // salary = salary + 300.500
// console.log(`Salary is ${salary}`);

// isVerified = true;
// console.log(isVerified);

// let nums = [30, 40, 50]
// nums.push(60) // 30 40 50 60
// nums.splice(1, 1, 100) // 30 100 50 60
// nums.pop() // 30 100 50
// console.log(` Numbers are ${nums}`);


data = {"branch": "cse", course: "Flask"}
data["college"] = "qis"
data["branch"] = "ece"
console.log(data)
console.log(data["course"])


// // loops
// let arr = []
// for(let i=1; i<=10; i++){
//     arr.push(i)
// }
// console.log(i);

// odds = []
// for(p=1; p<11; p+=2){
//     odds.push(p);
// }
// console.log(odds)

// i = 1
// while(i<=10){
//     console.log(i)
//     i++
// }



for(i=11; i<=10; i++){
    console.log(`for loop: ${i}`)
}

j = 11
while (j<=10){
    console.log(`while loop: ${j}`)
    j++
}

k = 110
do{
    console.log(`do while loop: ${k}`)
    k++
}while(k<=10)


// arr = [3, 1, 2, 4]
// arr.splice(0, 1)
// arr.splice(2, 0, 3)
// // n = arr.splice(0, 1)
// // arr.splice(2, 0, n[0])
// console.log(arr);

function add(num1, num2){
    console.log(num1 + num2);
    return "done"
}

add(10, 20)
add(30, 40)
// -----------------------------------------------------
function add(num1, num2){
    console.log(num1 + num2);
    return "done"
}

console.log(add(10, 20))
console.log(add(30, 40))
// -----------------------------------------------



course = "flask "
course += "crt"
console.log(course)