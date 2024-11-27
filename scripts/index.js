class indexPage {
    apiKey = "";
    placeId = "ChIJFwNWkCuvU4gRPgBADymHygo";
    textSearchUrl = "https://places.googleapis.com/v1/places:searchText";
    placeDetailsUrl = `https://places.googleapis.com/v1/places/`;

    constructor()
    {
        console.log("instantiation");

        document.getElementById("contact-form-link").addEventListener("click", (event) => {
            const name = document.getElementById("connect-name").value;
            const email = document.getElementById("connect-email").value;
            const phone = document.getElementById("connect-phone").value;
            const address = document.getElementById("connect-address").value;
            const address2 = document.getElementById("connect-address2").value;
            const goals = document.getElementById("connect-goals").value;
            const date = document.getElementById("connect-redeem-date").value;

            const subject = `I am Interested in DT Painting Pro - ${name}`;
            const body = `Name: ${name}\nAddress: ${address} ${address2}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nGoals: ${goals}`;
            const url = encodeURI(`mailto:dtpaintingpro@gmail.com?subject=${subject}&body=${body}`);

            event.currentTarget.href = url;
        });
    }

    getPlaceId()
    {
        fetch(this.textSearchUrl, {
            method: "POST",
            body: JSON.stringify({
                textQuery: "DT Painting Pro, Winston-Salem NC"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "X-Goog-Api-Key": this.apiKey,
                "X-Goog-FieldMask": "places.id,places.displayName"
            }
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    getPlaceDetails(placeId)
    {
        let requestUrl = this.placeDetailsUrl + placeId + `?fields=id,displayName,photos&key=${this.apiKey}`;
        fetch(requestUrl)
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
}

var page = new indexPage();
// page.getPlaceId();
//page.getPlaceDetails(page.placeId);