
// // const, let, var
// var _name = 10;
// var _name = 20;
// _name += 5;
// console.log(_name)

// let b = 20;
// // let b = 30;
// b += 10;
// console.log(b);

// // const c = 30;
// // // const c = 40;
// // c += 5;
// // console.log(c);


// // Number, String, Boolean, Array, Object

// var course = "Flask"
// course += " "
// course += "CRT"
// console.log(`Our Course is ${course}`)


// let age = 30.6
// age += 5.1
// console.log(age)

// isVerified = true;
// console.log(isVerified)

// nums = [1, 2, 3, 4]
// nums.push(10) // 1 2 3 4 10
// nums.pop() // 1 2 3 4
// nums.push(5) //1 2 3 4 5
// nums.splice(2, 0, 100) //1 2 100 3 4 5
// console.log(`Numbers are ${nums}`)


// data = {"name": "ravi", age: 22}
// console.log(data)


// // loops
// for(let i=0; i<=10; i++){
//     console.log(i);
// }
// // console.log(`after executing loop ${i}`)
// console.log("From 1 to 7")
// for(let i=1; i<=7; i++){
//     console.log(i);
// }

// console.log("From 7 to 1")
// for(i=7; i>=1; i--){
//     console.log(i);
// }

// console.log("From -9 to 9")
// for(i=-9; i<=9; i++){
//     console.log(i);
// }

// console.log("From 19 to 7")
// for(i=19; i>=7; i--){
//     console.log(i);
// }

// console.log("From 14 to 15")
// for(let i=14; i<=15; i++){
//     console.log(i);
// }
// // console.log(`after executing loop ${i}`)

// console.log("From 9 to -9")
// for(let i=9; i>=-9; i--){
//     console.log(i);
// }
// console.log(`after executing loop ${i}`)

// console.log("From 2 to 10")
// i = 2;
// while (i<=10){
//     console.log(i);
//     i++
// }
// // console.log(`after executing loop ${i}`)

// console.log("From 19 to 7")
// i = 19;
// while (i>=7){
//     console.log(i);
//     i--
// }

// console.log("From 14 to 15")
// i = 14;
// while (i<=15){
//     console.log(i);
//     i++
// }

// console.log("From -9 to 9")
// i = -9;
// while (i<=9){
//     console.log(i);
//     i++
// }

// console.log("From 9 to -9")
// i = 9;
// while (i>=-9){
//     console.log(i);
//     i--
// }

// for(i=1; i<=10; i++){
//    console.log(`${i}) Python Fullstack`)
// }

// console.log("1 to 10 evens")
// for(i=2; i<=10; i+=2){
//     console.log(i)
//  }

//  console.log("1 to 10 odds")
//  for(i=1; i<=10; i+=2){
//      console.log(i)
//   }


//   for(i=10; i<=5; i++){
//     console.log(`For Loop ${i}`)
//  }

//  j = 10
//  while (j <= 5) {
//     console.log(`While Loop ${j}`)
//     j++
//  }

//  k = 10
//  do{
//     console.log(`Do While Loop ${k}`)
//     k++
//  }while (k<=5)


// evens = []
// for (even=6; even<=10; even+=2){
//     evens.push(even * 10)
// }
// console.log(evens)


// even_product_arr = []
// for (num=6; num<=20; num++){
//     product = num * 7
//     if (product % 2 == 0){
//         even_product_arr.push(product)
//     }
// }
// console.log(even_product_arr)
// // -----------------------------------------------------
// even_product_arr = []
// for (num=6; num<=20; num+=2){
//     product = num * 7
//     even_product_arr.push(product)
// }
// console.log(even_product_arr)



// function add(num1, num2){
//     console.log(num1 + num2)
//     return "done"
// }

// console.log(add(10, 20));
// console.log(add(30, 40));



function clicked(){
    alert("Clicked The Button");
}

function colorChange(){
    btn = document.getElementById("btn-1");
    btn.style.backgroundColor = "pink";
    btn.style.color = "aliceblue";
    btn.style.border = "6px solid black";
    btn.style.fontWeight = "600";
}

function original(){
    btn = document.getElementById("btn-1");
    btn.style.backgroundColor = "transparent";
    btn.style.border = "2px solid black";
    btn.style.color = "black";
    btn.style.fontWeight = "300";
}

function double(){
    // alert("Double Clicked");
    btn = document.getElementById("btn-2");
    btn.style.backgroundColor = "green";

}

function rightClicked(){
    btn = document.getElementById("btn-2");
    btn.style.backgroundColor = "transparent";
}

function onParent(){
    parent = document.getElementsByClassName("temp-div")[0]
    alert("On Parent")
}

function hold(){
    btn = document.getElementById("btn-2")
    btn.style.boxShadow = "10px 0px 4px orange";
}

function release(){
    btn = document.getElementById("btn-2");
    btn.style.boxShadow = "none"
}

function change(){
    btn = document.getElementById("last");
    btn.innerText = "HAHAHA";
}

function previous(){
    btn = document.getElementById("last");
    btn.innerText = "Shadow";
    btn.style.textTransform = "uppercase";
    btn.style.fontSize = "28px";
    btn.style.boxShadow = "none";
    btn.style.borderRadius = "20% 0% 20% 0%"
}