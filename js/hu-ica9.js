let btn = document.querySelector("#button");
let text = document.querySelector("#move_text");

function changeBtn(){
    btn.textContent = "made you click!!!";
    btn.style.backgroundColor = "Lavender";
    btn.style.border = "2px solid SlateBlue";
}

function hideText(){
    text.style.color = "rgba(255,255,255,0)";
}

function showHeart(){
    alert("♥");
}

btn.addEventListener('click',changeBtn);
text.addEventListener('click',hideText);
