document.querySelectorAll("button").forEach(function (item) {
    item.onclick = function (event) {
        document.querySelector("#demo").style.color = item.dataset.color;
        document.querySelector("#demo").style.textAlign = item.dataset.location;
    }
});

