function entered(){
    btn = document.getElementById("btn-1");
    btn.style.backgroundColor = "pink";
    btn.style.border = "8px solid black";
}

function leaving(){
    btn = document.getElementById("btn-1");
    btn.style.backgroundColor = "transparent";
    btn.style.border = "2px solid black";
    btn.style.boxShadow = "none"
}

function clicked(){
    btn = document.getElementById("btn-1");
    btn.style.boxShadow = "6px 6px 20px rgb(217, 57, 83)"
}

function double(){
    btn = document.getElementById("btn-2")
    btn.style.color = "blue";
    btn.style.textTransform = "uppercase";
    btn.style.fontWeight = "900";
}

function hold(){
    btn = document.getElementById("btn-3");
    btn.style.background = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(images/harrypotter.png)";
    btn.style.backgroundSize = "100% 100%";
    btn.style.color = "aliceblue";
    btn.style.fontWeight = "800";
    // btn.style.width = "100%";
}

function unhold(){
    btn = document.getElementById("btn-3");
    btn.style.background = "none";
    btn.style.color = "black";
    btn.style.fontWeight = "400";

}

function onbtn2(){
    btn = document.getElementById("btn-2");
    btn.style.boxShadow = "8px 8px 10px green";
}

function rightClick(){
    btn = document.getElementById("btn-3");
    btn.style.boxShadow = "8px 8px 10px orange";

}