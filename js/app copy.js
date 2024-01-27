

let therapistEls = Array.from(document.getElementsByClassName("therapist"));
therapistEls.forEach(therapistEl => {
    therapistEl.setAttribute("data-state", "closed");
})

function checkInfo (therapistEl) {
        let moreButtonEl = therapistEl.querySelector(".morebutton");
        let moreEl = therapistEl.querySelector(".more");
        let bgEl = therapistEl.querySelector(".bg");
        if (therapistEl.getAttribute("data-state") == "opened") {
            moreButtonEl.classList.toggle('morebutton--on');
            moreButtonEl.classList.toggle('morebutton--off');
            bgEl.classList.toggle('bg--off');
            bgEl.classList.toggle('bg--on');
            moreEl.classList.toggle('more--off');
            moreEl.classList.toggle('more--on');
        }
        if (therapistEl.getAttribute("data-state") == "closed") {
            moreButtonEl.classList.toggle('morebutton--off');
            moreButtonEl.classList.toggle('morebutton--on');
            bgEl.classList.toggle('bg--on');
            bgEl.classList.toggle('bg--off');
            moreEl.classList.toggle('more--on');
            moreEl.classList.toggle('more--off');
        }
}
function openInfo () {
    let moreButtons = Array.from(document.getElementsByClassName("morebutton"));
    moreButtons.forEach(button => {
        let therapistEl = button.closest(".therapist");
        button.addEventListener('click', function(e) {
            if (therapistEl.getAttribute("data-state") == "opened") {
                therapistEl.setAttribute("data-state", "closed");
            }
            if (therapistEl.getAttribute("data-state") == "closed") {
                therapistEl.setAttribute("data-state", "opened");
            }
            checkInfo(therapistEl);
        })
    });
}
// On part ici du principe qu'on a du statique, autrement on aurait pas généré la section
// Ici l'élément est le parent direct, on aurait pu utiliser parentnode
// Possibilité de le faire à l'aide de classes, on parcourerait les éléments parents tant qu'on ne tombe pas sur la classe demandé.
// Autrement une approche avec l'attribut data-id aurait été envisageable.
function descriptionCheck () {
    let moreEls = Array.from(document.getElementsByClassName("more"));
    let descriptionEls = Array.from(document.getElementsByClassName("more__description"));
    let linkEls = Array.from(document.getElementsByClassName("more__link"));
    for (let i = 0; i < moreEls.length && i < descriptionEls.length && i < linkEls.length ; i++) {
        if (descriptionEls[i].innerText == "" || linkEls[i].href == "#") {
            moreEls[i].classList.add("centered");
        }
        if (descriptionEls[i].innerText == "") {
            descriptionEls[i].remove();
        }
        if (!linkEls[i].href) {
            linkEls[i].remove();
        }
    }
}


descriptionCheck();
openInfo();




/*
moreEls.forEach(moreEl => {
    descriptionEls.forEach(descriptionEl => {
        if (descriptionEl.innerText == "") {
            descriptionEl.remove();
        }
    })
}) 
*/

