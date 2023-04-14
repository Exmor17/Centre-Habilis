function infoTherapist () {
    let moreButtons = Array.from(document.getElementsByClassName("therapist__more-button-off"));
    console.log(moreButtons);
    let bgEl = document.querySelector(".bg-off");
    console.log(bgEl);
    moreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            button.classList.toggle('therapist__more-button-on');
            bgEl.classList.toggle('bg-on');
        })
    });
}

infoTherapist();

