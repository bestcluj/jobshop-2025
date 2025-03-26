var prevButtonNarrow = document.getElementById("prev-narrow");
var nextButtonNarrow = document.getElementById("next-narrow");

//!!! NUMARUL DE PAGINI DIN public/scripts/bookAnimation.js     !!!
//!!! NUMARUL DE PAGINI DIN  src/pages/booklet.astro            !!!
var numberOfPagesNarrow = 10;
var currentPageNarrow = 1;
var visiblePagesNarrow = 6; // si fata si spate

var pagesNarrow = [];

function loadPageNarrow(page) {

    page.classList.add("active");

    const img = page.querySelector("img");

    if(img && img.dataset.src) {

        img.src = img.dataset.src;
        img.removeAttribute("data-src");
    }
}

function unloadPageNarrow(page) {

    page.classList.remove("active");

    const img = page.querySelector("img");

    if(img && !img.dataset.src) {

        img.dataset.src = img.src;
        img.src = "";
    }
}

for(let i = numberOfPagesNarrow; i >= 1; i--) {

    pagesNarrow[i] = document.getElementById(`page${i}-narrow`);
    pagesNarrow[i].style.zIndex = `${numberOfPagesNarrow - i + 1}`; 

    if(i > currentPageNarrow - visiblePagesNarrow && i < currentPageNarrow + visiblePagesNarrow)
        loadPageNarrow(pagesNarrow[i]);

    else
        unloadPageNarrow(pagesNarrow[i]);
}

function animatieNarrow(id, loadPages=true) {

    if(id === -1) { // previous page

        if(currentPageNarrow === 1) return;

        pagesNarrow[--currentPageNarrow].classList.remove("flipped");

        if(loadPages) {
            if(currentPageNarrow - visiblePagesNarrow >= 1)
                loadPageNarrow(pagesNarrow[currentPageNarrow - visiblePagesNarrow]);
    
            if(currentPageNarrow + visiblePagesNarrow <= numberOfPagesNarrow)
                unloadPageNarrow(pagesNarrow[currentPageNarrow + visiblePagesNarrow]);
        }
    }
    else { // next page

        if(currentPageNarrow === numberOfPagesNarrow) return;

        if(loadPages) {
            if(currentPageNarrow - visiblePagesNarrow >= 1)
                unloadPageNarrow(pagesNarrow[currentPageNarrow - visiblePagesNarrow]);
    
            if(currentPageNarrow + visiblePagesNarrow <= numberOfPagesNarrow)
                loadPageNarrow(pagesNarrow[currentPageNarrow + visiblePagesNarrow]);
        }

        pagesNarrow[currentPageNarrow++].classList.add("flipped");

    }
}
