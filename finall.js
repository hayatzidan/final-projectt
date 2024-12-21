document.addEventListener('DOMContentLoaded', function() {
    // Select all card elements
    const cards = document.querySelectorAll('.card');
    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal-image');
    const modalText = document.querySelector('.modal-text');
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

    const texts = {
        card1: 'The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World.',
        card2: 'The Statue of Zeus was a giant seated figure of Zeus, made by the sculptor Phidias.',
        card3: 'The Colossus of Rhodes was a statue of the sun god Helios, standing at the entrance of the harbor.',
        card4: 'The Temple of Artemis was a large temple dedicated to the goddess Artemis in Ephesus, Turkey.',
        card5: 'The Lighthouse of Alexandria, also known as the Pharos, was one of the tallest man-made structures in the world.',
        card6: 'The Mausoleum at Halicarnassus was the tomb of Mausolus, a Persian satrap of Caria.',
        card7: 'The Hanging Gardens of Babylon were one of the Seven Wonders, with terraced gardens built by Nebuchadnezzar II.'
    };

    // Function to open the modal with the clicked image
    cards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const imagePath = imagePaths[`card${index + 1}`];
            const text = texts[`card${index + 1}`];
            console.log(text);
            
            modalImage.src = imagePath; // Set the image source
            modalText.textContent = text;  // Set the text for the modal
            
            // Show the modal
            modal.style.display = 'flex';
        });
    });

    // Add event listener to back button to close the modal
    backButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Hide the modal
    });
});
