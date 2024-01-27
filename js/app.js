import IPFetcher from "./fetch-ip.js";
import PrivacyPopUp from "./privacy-popup.js";

class App {

    main() {
        new PrivacyPopUp(document.querySelector('body'), IPFetcher);
    }

}

const app = new App();
app.main();

// Animations from here

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

function descriptionScroll () {
    let descriptionTextEls = Array.from(document.querySelectorAll(".more__description"));
    console.log(descriptionTextEls);
    descriptionTextEls.forEach(descriptionTextEl => {
        console.log("FDP 1");
        descriptionTextEl.addEventListener('mouseenter', () => {
            console.log("FDP 2");
            descriptionTextEl.classList.add('description--hovered');
            descriptionTextEl.scrollTop = descriptionTextEl.scrollHeight;
        });
        descriptionTextEl.addEventListener('mouseleave', () => {
            console.log("FDP 3");
            descriptionTextEl.classList.remove('description--hovered');
        });
    });
}


descriptionCheck();
descriptionScroll();
openInfo();






