console.log("Welcome to Annie's Cakes!!");
window.onload=function(){
    alert("Welcome to Annie's Cakes!!");
};
function showSpecial() {
    const special = document.getElementById("special");
    special.style.display = "block";
    special.style.backgroundColor = "lightyellow";
    special.style.border = "2px solid orange";
    special.style.padding = "10px";
    special.style.fontSize = "20px";
    special.style.textAlign = "center";
    special.style.margin = "20px auto";
    special.style.width = "80%";
    special.innerHTML = "Today's Special: Kunafa Chocolate  Cake!";
}
setInterval(function(){
const text=document.getElementById("blinking-text");
if(text.style.visibility==="hidden"){
    text.style.visibility="visible";
}
else{
    text.style.visibility="hidden";
}
},500);