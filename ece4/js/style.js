function entered(){
    btn = document.getElementById("btn-1");
    btn.style.backgroundColor = "pink";
    btn.style.textTransform = "uppercase";
}


function leaving(){
    btn = document.getElementById("btn-1");
    btn.style.backgroundColor = "transparent";
    btn.style.textTransform = "Capitalize";
    btn.style.boxShadow = "none";

}

function clicked(){
    btn = document.getElementById("btn-1");
    btn.style.boxShadow = "6px 6px 20px rgb(202, 98, 115)"
}


function hold(){
    btn = document.getElementById("btn-2");
    btn.style.border = "6px solid black";
}

function release(){
    btn = document.getElementById("btn-2");
    btn.style.border = "2px solid black";
}

function doubleClicked(){
    btn = document.getElementById("btn-2");
    btn.style.backgroundColor = "rgb(185, 129, 26)";
}

function changing(){
    document.getElementById("btn-2").innerText = "Haha";

}