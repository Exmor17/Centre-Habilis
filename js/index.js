function infoTherapist () {
    let moreButtons = Array.from(document.getElementsByClassName("morebutton"));
    moreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            button.classList.toggle('morebutton--off');
            button.classList.toggle('morebutton--on');
            let bgEl = button.nextElementSibling;
            let moreEl = button.previousElementSibling;
            bgEl.classList.toggle('bg--off');
            bgEl.classList.toggle('bg--on');
            moreEl.classList.toggle('more--off');
            moreEl.classList.toggle('more--on');
        })
    });
}

infoTherapist();

