class PrivacyPopUp {

    popupEl;
    IPFetcher;
    ipFetch;
    fetchedIP;
    visitorIP;

    constructor(parentNode, IPFetcher) {

        this.visitorIP = sessionStorage.getItem('visitorIP');
        this.IPFetcher = IPFetcher; // Ici malgré l'import dans App.js IPFetcher n'était pas accessible

        if (!this.visitorIP) {
            
            this.parentNode = parentNode;

            const popupEl = document.createElement('div'); 
            popupEl.classList.add('popup');
            popupEl.innerHTML = `
                <div class="popup__content">
                    <h4 class="popup__content__title" >Votre anonymat<i class="fa-solid fa-user-secret"></i></h4>
                    <p>Nous garantissons ne conserver aucune donnée personnelle lors de la navigation sur ce site.</p>
                    <a href="https://www.edoeb.admin.ch/dam/edoeb/fr/Dokumente/datenschutz/La%20nouvelle%20loi%20f%C3%A9d%C3%A9rale%20sur%20la%20protection%20des%20donn%C3%A9es%20du%20point%20de%20vue%20du%20PFPDT.pdf.download.pdf/La%20nouvelle%20loi%20f%C3%A9d%C3%A9rale%20sur%20la%20protection%20des%20donn%C3%A9es%20du%20point%20de%20vue%20du%20PFPDT.pdf" class="popup__content__morelink"><i class="fa-solid fa-chevron-right"></i><p>Nouvelle loi sur la protection des données</p><i class="fa-solid fa-file-lines"></i></i></a>
                </div>
                <div class="popup__closesection">
                    <button class="popup__closesection__closebutton">Compris</button>
                </div>`;
            const closeButton = popupEl.querySelector(".popup__closesection__closebutton");
            closeButton.addEventListener('click', this.closePopUp.bind(this)); 
            this.parentNode.appendChild(popupEl);

            this.popupEl = popupEl;
        } 
        return;
        
    }

    async closePopUp() {

        this.ipFetch = new this.IPFetcher();
        this.fetchedIP = await this.ipFetch.fetchIP(); // préférable de faire l'appel fetch() sur une fonction séparée du constructeur
        console.log(this.ipFetch.visitorIP);
        sessionStorage.setItem('visitorIP', this.ipFetch.visitorIP);
        this.popupEl.remove();
    }

}

export default PrivacyPopUp;
 

/*this.ipFetch
            .fetchIP()
            .then((fetchedIP) => {
                console.log(fetchedIP);
                this.visitorIP = sessionStorage.setItem('visitorIP', fetchedIP);
                this.popupEl.remove();
            })
            .catch((error) => {
                // Gérer les erreurs ici, si nécessaire
                console.error(error);
            });
            
            Version avec promise
            
            */


/*constructor(parentNode) {

    this.parentNode = parentNode;
    
    const popupEl = document.createElement('div'); 
    popupEl.classList.add('popup');
    popupEl.innerHTML = `
            <div class="popup__content">
                <h4 class="popup__content__title" >Protection des données</h4>
                <p class="popup__content__text">BlaBlaBla DonnéesBlaBlaBla DonnéesBlaBlaBla DonnéesBlaBlaBla DonnéesBlaBlaBla DonnéesBlaBlaBla DonnéesBlaBlaBla DonnéesBlaBlaBla DonnéesBlaBlaBla Données</p>
                <a href="./privacy-policy.html" class="popup__content__morelink"><i></i><p>En savoir plus</p></a>
            </div>
            <button class="popup__closebutton">J'ai compris</button>`;

    const closeButton = popupEl.querySelector(".popup__closebutton");
    closeButton.addEventListener('click', this.closePopUp.bind(this, popupEl)); // ou si pas besoin de paramètre this.closePopUp sans parenthèse pour juste placer la référence sinon exécution directe de closePopUp à l'appel de l'l'écouteur
    
    this.parentNode.appendChild(popupEl);
} 
closePopUp(popupEl) {
    popupEl.remove();
}

*/