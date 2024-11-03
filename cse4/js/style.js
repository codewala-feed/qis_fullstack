function entered(){
    btn = document.getElementById("btn-1")
    btn.style.backgroundColor = "pink";
    btn.style.border = "6px solid black";
}

function leaving(){
    btn = document.getElementById("btn-1")
    btn.style.backgroundColor = "transparent";
    btn.style.border = "2px solid black";
    btn.style.boxShadow = "none"

    btn2 = document.getElementById("btn-2")
    btn2.style.color = "black";
    btn2.style.background = "none";
    btn2.style.fontWeight = "400";
    btn2.style.boxShadow = "none"


}

function clicked(){
    document.getElementById("btn-1").style.boxShadow = "8px 8px 10px rgb(224, 53, 82)"
}

function doubleClicked(){
    btn = document.getElementById("btn-2")
    btn.style.background = "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(images/harrypotter.png)";
    btn.style.backgroundSize = "100% 100%";
    btn.style.color = "aliceblue";
    btn.style.fontWeight = "800";
}

function rightClick(){
    btn = document.getElementById("btn-2")
    btn.style.boxShadow = "6px 6px 8px green";
}

function hold(){
    btn = document.getElementById("btn-3")
    btn.style.backgroundColor = "orange";
    btn.innerText = "Haha";
}

function release(){
    btn = document.getElementById("btn-3")
    btn.style.backgroundColor = "transparent";
    btn.innerText = "Button3";

}