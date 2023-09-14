document.getElementById("rpForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const pseudo = formData.get("pseudo");
    const nomRP = formData.get("nomRP");
    const sexeRP = formData.get("sexeRP");
    const pouvoirsRP = formData.get("pouvoirsRP");

    const webhookURL = "https://discord.com/api/webhooks/1151837623355179028/mOl22UaVxEpDPuviIoeHDiabzBMnpfrjX6wVkj2WWndv-94oPuqSiwWsONEBHn7qFCRp";

    const embed = {
        title: "Formulaire RP",
        description: "Nouvelle réponse au formulaire RP",
        color: 0x0088ff, // Couleur de l'embed (en hexadécimal)
        fields: [
            {
                name: "Pseudo",
                value: pseudo,
                inline: true,
            },
            {
                name: "Nom RP",
                value: nomRP,
                inline: true,
            },
            {
                name: "Sexe RP",
                value: sexeRP,
                inline: true,
            },
            {
                name: "Pouvoirs RP",
                value: pouvoirsRP,
                inline: true,
            },
        ],
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            embeds: [embed],
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        alert("Réponses envoyées avec succès !");
        // Réinitialisez le formulaire si nécessaire
        e.target.reset();
    })
    .catch(error => {
        console.error(error);
        alert("Formulaire Envoyé avec succès");
    });
});
