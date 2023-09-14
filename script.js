document.getElementById("rpForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const answers = [];
    formData.forEach((value, key) => {
        answers.push(`${key}: ${value}`);
    });

    const webhookURL = "https://discord.com/api/webhooks/1151837623355179028/mOl22UaVxEpDPuviIoeHDiabzBMnpfrjX6wVkj2WWndv-94oPuqSiwWsONEBHn7qFCRp"; // Remplacez par le vrai URL du webhook Discord

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: answers.join("\n"),
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Réponses envoyées avec succès !");
        // Réinitialisez le formulaire si nécessaire
        e.target.reset();
    })
    .catch(error => {
        console.error(error);
    });
});
