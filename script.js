// Get elements
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const addButton = document.getElementById('add-btn');
const cardsContainer = document.getElementById('cards');

// Add new flashcard
addButton.addEventListener('click', () => {
    const question = questionInput.value;
    const answer = answerInput.value;
    
    if (question && answer) {
        addFlashcard(question, answer);
        questionInput.value = '';
        answerInput.value = '';
    }
});

// Create and display a flashcard
function addFlashcard(question, answer) {
    const card = document.createElement('div');
    card.className = 'flashcard';
    card.innerHTML = `
        <div class="front">${question}</div>
        <div class="back" style="display:none">${answer}</div>
    `;
    
    // Flip card on click
    card.addEventListener('click', () => {
        const front = card.querySelector('.front');
        const back = card.querySelector('.back');
        
        if (front.style.display === 'none') {
            front.style.display = 'block';
            back.style.display = 'none';
        } else {
            front.style.display = 'none';
            back.style.display = 'block';
        }
    });
    
    cardsContainer.appendChild(card);
}
