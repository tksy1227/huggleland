document.getElementById('enter-btn').addEventListener('click', function() {
    const introPage = document.getElementById('intro-page');
    
    // Add fade-out effect
    introPage.classList.add('fade-out');
    
    // Wait for the fade-out to finish before navigating to the new page
    setTimeout(() => {
        window.location.href = 'adventure.html';  // Redirects to adventure.html after fade-out
    }, 1000);  // Match the duration of the fade-out effect
});

document.getElementById('go-btn').addEventListener('click', function() {
    const goBtn = document.getElementById('go-btn');
    
    // Add fade-out effect to the button
    goBtn.classList.add('fade-out');
    
    // Wait for the fade-out to finish before navigating to the new page
    setTimeout(() => {
        window.location.href = 'scene2.html';  // Redirects to adventure.html after fade-out
    }, 1000);  // Match the duration of the fade-out effect
});


    // Initialize the scores for each character
    let scores = {
        "CharacterA": 0, // mouse
        "CharacterB": 0, // owl
        "CharacterC": 0, // fox
        "CharacterD": 0, // bear
        "CharacterE": 0 // bunny
    };

    // If there's already a score saved in localStorage, retrieve it
    if (localStorage.getItem('scores')) {
        scores = JSON.parse(localStorage.getItem('scores'));
    }

    // Function to update scores
    function updateScore(character) {
        scores[character]++;  // Increment score for the selected character
        localStorage.setItem('scores', JSON.stringify(scores));  // Store updated scores in localStorage
    }

    // Event listeners for each option button
    document.querySelector('.opt-btn-1').addEventListener('click', function() {
        updateScore('CharacterA');
    });

    document.querySelector('.opt-btn-2').addEventListener('click', function() {
        updateScore('CharacterB');
    });

    document.querySelector('.opt-btn-3').addEventListener('click', function() {
        updateScore('CharacterC');
    });

    document.querySelector('.opt-btn-4').addEventListener('click', function() {
        updateScore('CharacterD');
    });

    document.querySelector('.opt-btn-5').addEventListener('click', function() {
        updateScore('CharacterE');
    });

    // At the end of the story, you can compare scores and display the character with the highest score.
    function getFinalResult() {
        let highestScore = 0;
        let selectedCharacter = '';

        for (const [character, score] of Object.entries(scores)) {
            if (score > highestScore) {
                highestScore = score;
                selectedCharacter = character;
            }
        }

        return selectedCharacter;
    }