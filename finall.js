document.addEventListener('DOMContentLoaded', function() {
    // Select all card elements
    const cards = document.querySelectorAll('.card');
    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal-image');
    const backButton = document.querySelector('.back-button');
    const imagePaths = {
        card1: 'Pyram.jpg',
        card2: 'poiu.jpg',
        card3: 'Colo.jpg',
        card4: 'Temple.jpg',
        card5: 'light.jpg',
        card6: 'Kk6.jpg',
        card7: 'Babylon.jpg',
    };

    // Function to open the modal with the clicked image
    cards.forEach((card, index) => {
        card.addEventListener('click', function() {
            // Get the corresponding image path based on the card clicked
            const imagePath = imagePaths[`card${index + 1}`];
            console.log(imagePath)
            
            // Set the image URL to the modal image
            modalImage.src = imagePath; // Set the image source
            
            // Show the modal
            modal.style.display = 'flex';
        });
    });

    // Add event listener to back button to close the modal
    backButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Hide the modal
    });
});
