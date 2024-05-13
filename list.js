
document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("list");
    const addButton = document.getElementById("add");
    const removeButton = document.getElementById("remove");
    const itemInput = document.getElementById("item");
    let isWhite = true;

    addButton.addEventListener("click", function () {
        const items = itemInput.value.trim().split(/\s+/);
        items.forEach(item => {
            if (item !== "") {
                const li = document.createElement("li");
                li.textContent = item;
                li.classList.add(isWhite ? "white" : "yellow");
                list.appendChild(li);
                isWhite = !isWhite;
            }
        });
        itemInput.value = "";
    });

    removeButton.addEventListener("click", function () {
        const textToRemove = itemInput.value.trim().toLowerCase();
        const items = list.querySelectorAll("li");
        items.forEach(item => {
            if (item.textContent.toLowerCase() === textToRemove) {
                list.removeChild(item);
                isWhite = !isWhite;
                return;
            }
        });
        itemInput.value = "";
    });
});