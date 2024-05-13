

document.addEventListener("DOMContentLoaded", function () {
    const cookieHeader = document.getElementById("cookie-header");
    cookieHeader.style.color = "#f7f16d";

    const cookieCount = document.getElementById("cookie-count");
    const cookies = document.querySelectorAll("#cookie-jar .cookie");
    cookieCount.textContent = `${cookies.length}! There are ${cookies.length} cookie(s) in the cookie jar!`;

    setInterval(function () {
        const lastCookie = document.querySelector("#cookie-jar .cookie:last-child");
        if (lastCookie) {
            lastCookie.remove();
            cookieCount.textContent = `${document.querySelectorAll("#cookie-jar .cookie").length}! There are ${document.querySelectorAll("#cookie-jar .cookie").length} cookie(s) in the cookie jar!`;
        }
    }, 30000);
});

        document.addEventListener("DOMContentLoaded", function() {
            const cookieList = document.querySelectorAll("#cookie-jar li.cookie");
            let cookieCount = cookieList.length;

            function removeLastCookie() {
                if (cookieCount > 0) {
                    const lastCookie = cookieList[cookieCount - 1];
                    lastCookie.remove();
                    cookieCount--;
                    document.querySelector("#cookie-count").textContent ={cookieCount};
                }
            }

            setInterval(removeLastCookie, 30000);
        })



