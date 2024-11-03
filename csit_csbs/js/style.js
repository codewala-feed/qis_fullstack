function entered(){
    btn = document.getElementById("btn-1")
    btn.style.backgroundColor = "pink";
    btn.style.border = "6px solid black";
    btn.style.color = "aliceblue";
    btn.style.fontSize = "30px";
}

function leaved(){
    btn = document.getElementById("btn-1");
    btn.style.backgroundColor = "transparent";
    btn.style.border = "2px solid black";
    btn.style.color = "black";
    btn.style.fontSize = "20px";

}


function started(){
    alert("On Parent");
}

function clicked(){
    alert("Clicked Button");
}

function doubleClicked(){
    alert("Double Clicked Button");
}


function hold(){
    btn = document.getElementById("btn-3");
    btn.style.backgroundColor = "green";
}

function release(){
    btn = document.getElementById("btn-3");
    btn.style.backgroundColor = "transparent";
}

function info(){
    alert("Right Clicked");
}

function change(){
    document.getElementById("btn-3").innerText = "HAHA";
}