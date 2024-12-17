class indexPage {
    constructor()
    {
        // Connect Form
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
}

var page = new indexPage();