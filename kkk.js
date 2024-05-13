document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if (value) {
        var li = document.createElement('li');
        li.textContent = value;
        document.getElementById('list').appendChild(li);
        document.getElementById('item').value = "";
    }
});
document.getElementById('remove').addEventListener('click', function() {
    var value = document.getElementById('item').value.toLowerCase();
    var listItems = document.querySelectorAll('#list li');

    listItems.forEach(function(item) {
        if (item.textContent.toLowerCase() === value) {
            item.remove();
     }
    })
});addButton.addEventListener("click", function () {
                const items = itemInput.value.trim().split(/s+/);
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
                        isYellow = !isYellow; 
                        return;
                    }
                });
                itemInput.value = "";
                removeButton.addEventListener("click", function () {
                    const textToRemove = itemInput.value.trim().toLowerCase();
                    const items = list.querySelectorAll("li");
                    items.forEach(item => {
                        if (item.textContent.toLowerCase() === textToRemove) {
                            list.removeChild(item);
                            isWhite = !isWhite; // Update color pattern
                            return;
                        }
                    });
                    itemInput.value = "";
            });
        });

s


