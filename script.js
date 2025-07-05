console.log("Welcome to Annie's Cakes!!");
window.onload=function(){
    alert("Welcome to Annie's Cakes!!");
};
function showSpecial() {
    const special = document.getElementById("special");
    special.style.display = "block";
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