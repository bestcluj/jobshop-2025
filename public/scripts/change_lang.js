window.addEventListener("load", (event) => {

    alert("hello");
    document.querySelectorAll('[data-lang]').values().forEach((item) => {
                
        item.setAttribute("data-display", item.style.display);
        item.style.display = "none";
    });
    document.querySelectorAll('[data-lang="en"]').values().forEach((item) => { item.style.display = item.getAttribute("display"); });
});