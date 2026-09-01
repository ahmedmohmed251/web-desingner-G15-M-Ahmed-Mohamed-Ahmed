var btn = document.getElementById("changeImg");

btn.addEventListener("click", (e) => {

    var img = btn.previousElementSibling;

    if (img.src.includes("1.jpg")) {

        img.src = "img/2.jpg";

    } else {

        img.src = "img/1.jpg";

    }

});