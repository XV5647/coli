// Un tableau pour stocker les avis
const reviews = [];

document.getElementById('review-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const reviewText = document.getElementById('review').value;
    const rating = parseInt(document.getElementById('rating').value);

    // Créer un objet avis
    const review = {
        name,
        reviewText,
        rating
    };

    // Ajouter l'avis au tableau
    reviews.push(review);

    // Réinitialiser le formulaire
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
    document.getElementById('rating').value = '';

    // Mettre à jour l'affichage des avis
    displayReviews();
});

// Fonction pour afficher les avis
function displayReviews() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    // Parcourir les avis et les ajouter à la liste
    reviews.forEach((review, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${review.name}</strong> a donné une note de ${review.rating}/20<br>${review.reviewText}`;
        reviewList.appendChild(listItem);
    });
}

// Appeler la fonction pour afficher les avis au chargement de la page
displayReviews();
