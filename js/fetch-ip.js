class IPFetcher {

    visitorIP;

    constructor() {
        this.visitorIP = null;
    }
    fetchIP() {
        return fetch('get-ip.php')
        .then(response => response.json())
        .then(data => {
            this.visitorIP = data.visitorIP;
            console.log(this.visitorIP);
            return this.visitorIP;
        })
        .catch(error => {
            console.error('Unable to fetch IP Address ' + error);
        });
    }
}

export default IPFetcher;