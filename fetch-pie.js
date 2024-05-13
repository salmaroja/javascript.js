window.onload = function(){
    var cookies = document.querySelectorAll("#cookie-jar.cookie");
    var cookieCountElement= document.getElementById("cookie-count");

    function removeLastCookie(){
        if(cookies.length>0){
            cookies[cookies.length -1].remove();
            cookieCountElement.textContent="there are"+cookies.length+"cookie(s) in the cookie jar !";
        }
    }
    setInterval(removeLastCookie,30000);
}