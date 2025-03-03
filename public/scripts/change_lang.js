window.addEventListener("load", (event) => {

    alert("hello");
    Array.from(document.querySelectorAll('[data-lang]')).forEach((item) => {
                
        item.setAttribute("data-display", item.style.display);
        item.style.display = "none";
    });
    Array.from(document.querySelectorAll('[data-lang="en"]')).forEach((item) => { item.style.display = item.getAttribute("data-display"); });
});