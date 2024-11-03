function entered(){
    btn = document.getElementById("btn-1")
    btn.style.backgroundColor = "pink";
    btn.style.border = "4px solid black";
}


function onParent(){
    alert("On Parent Working");
}

function exit(){
    btn = document.getElementById("btn-1")
    btn.style.backgroundColor = "transparent";
    btn.style.border = "2px solid black";
    document.getElementById("bg-div").style.backgroundImage = "none";
    document.getElementById("btn-1").style.boxShadow = "none"
}

function clicked(){
    img1 = document.getElementById("bg-div")
    img1.style.backgroundImage = "url(images/college4.jpg)";
}

function doubleClicked(){
    alert("double Clicked")
}

function shadow(){
    document.getElementById("btn-1").style.boxShadow = "4px 4px 8px rgb(167, 36, 58)"
}

function hold(){
    document.getElementById("btn-2").style.textTransform = "uppercase";
}

function release(){
    document.getElementById("btn-2").style.textTransform = "capitalize";
}

function change(){
    document.getElementById("btn-2").innerText = "HAha"   
}

function original(){
    document.getElementById("btn-2").innerText = "Button2"
}