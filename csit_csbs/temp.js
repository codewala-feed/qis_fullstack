
// // // const var let
// // var a = 10;
// // var a = 20;
// // a += 5;
// // console.log(a);

// // let b = 30;
// // // let b = 40;
// // b += 5;
// // console.log(b);

// // const c = 50;
// // // const c = 60;
// // // c += 10;
// // console.log(c);

// // // Number, String, Boolean, Array, Object

// // age = 22;
// // console.log(`age is ${age}`);

// // salary = 120000.500
// // console.log(`salary is ${salary}`)

// // _course = "Flask"
// // _course += " "
// // _course += "CRT"
// // _course += "."
// // console.log(_course)

// // nums = [1, 2, 3, 4, "python"]
// // nums.push(5)
// // nums.pop(2)
// // nums.splice(2, 1, 100)
// // nums.push(200)
// // console.log(`Numbers are ${nums}`)


// // data = {"course": "python", age: 23}
// // console.log(data)

// // // loops
// // for (let i=0; i < 11; i++){ //for
// //     console.log(i)
// // }
// // // console.log(`accessed outside the block ${i}`);

// // // for (const i=5; i<=7; i++){
// // //     console.log(i)
// // // }
// // // console.log(`accessed outside the block ${i}`);


// // console.log("from 10 to 5")
// // for(j=10; j>=5; j--){
// //     console.log(j);
// // }

// // console.log("from 19 to 7")
// // for(j=19; j>=7; j--){
// //     console.log(j);
// // }

// // console.log("from 14 to 15")
// // for(j=14; j<=15; j++){
// //     console.log(j);
// // }

// // console.log("from -9 to 9")
// // for(j=-9; j<=0; j++){
// //     console.log(j);
// // }

// // console.log("from 9 to -9")
// // for(j=9; j>=-9; j--){
// //     console.log(j);
// // }

// // console.log("15 to 10")
// // k = 15
// // while (k >= 10){
// //     console.log(k);
// //     k--
// // }

// // console.log("19 to 7")
// // k = 18
// // while (k >= 7){
// //     console.log(k);
// //     k-=2
// // }

// // console.log("14 to 15")
// // k = 14
// // while (k <= 15){
// //     console.log(k);
// //     k++
// // }

// // console.log("-9 to 9")
// // k = -9
// // while (k <= 9){
// //     console.log(k);
// //     k++
// // }

// // console.log("9 to -9")
// // k = 9
// // while (k >= -9){
// //     console.log(k);
// //     k--
// // }

// // functions
// function add(a, b){
//     console.log(a+b);
// }
// add(10, 20)
// add(30, 40)
// add(30, 40)
// add(30, 40)

// evens = []
// odds = []
// function is_even(num){
//     if (num % 2 == 0){
//         evens.push(num)
//     }
//     else{
//         odds.push(num)
//     }
// }

// for (i=1;i<=100;i++){
//     is_even(i);
// }

// console.log(evens)
// console.log(odds)


for(i=2;i<=10;i++){
    console.log(`for loop ${i}`);
}

j = 1
while (j<=10){
    console.log(`while loop ${j}`);
    j++
}

k = 30
do{
    console.log(`do while loop ${k}`)
    k++
}while(k<=10)

arr = []
for (even=6; even<=10; even+=2){
    arr.push(even * 10);
}
console.log(arr)

arr = []
for (even=6; even<=20; even+=2){
    num = (even * 7)
    arr.push(num);
}
console.log(`evens from 6-20 product of 7 are ${arr}`)

console.log("12.3");
// console.log("123"===123);


