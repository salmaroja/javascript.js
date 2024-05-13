window.onload = function(){
    var cookieHeader = document.getElementById("cookie-header");
    cookieHeader.style.color="#ffd700";
};
window.onload = function(){
    var cookies = document.querySelectorAll("#cookie-jar.cookie");
    var cookieCount = cookies.length;
    var cookieCountText = + cookieCount;
    var cookieCountElement = document.getElementById("cookie-count");
    cookieCountElement.textContent=cookieCountText;
    cookieCountElement.style.color ="#f7f16d";
};g