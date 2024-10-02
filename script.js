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



    const characters = {
        mouse: {
            name: 'mouse',
            image: 'images/mouse.png',
            description: 'Quick-thinking and handy, you always know how to fix things when they break. No problem is too big or too small when you have the right tools in your paws!',
            analysis: 'You tend to be pragmatic and resourceful in stressful situations. You approach challenges with a calm demeanor, relying on your problem-solving skills.',
            compatibility: 'Your personality matches well with the owl, who shares your knack for wisdom and planning. Together, you both form a dynamic duo in tackling obstacles!'
        },
        owl: {
            name: 'owl',
            image: 'images/owl.png',
            description: 'Wise and insightful, you observe and understand the world around you with great depth. Nothing escapes your sharp mind!',
            analysis: 'You excel in planning and strategizing. You remain calm under pressure and guide others with your wisdom.',
            compatibility: 'You get along well with the mouse, whose practical skills complement your insightful planning, making you a perfect team.'
        },
        fox: {
            name: 'fox',
            image: 'images/fox.png',
            description: 'Clever and adaptable, you know how to get out of tricky situations with your sharp mind and quick reflexes.',
            analysis: 'You are a master of flexibility and agility. You adapt to situations as they arise and always find a way out.',
            compatibility: 'Your cunning nature pairs well with the bear, whose strength helps balance your craftiness, creating an unstoppable duo.'
        }
        // Add more characters as needed...
    };


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

        // Add logging to track button clicks
        document.querySelector('.opt-btn-1').addEventListener('click', function() {
            updateScore('CharacterA');
            console.log('CharacterA (Mouse) score increased:', scores); // Track score update
        });

        document.querySelector('.opt-btn-2').addEventListener('click', function() {
            updateScore('CharacterB');
            console.log('CharacterB (Owl) score increased:', scores);
        });

        document.querySelector('.opt-btn-3').addEventListener('click', function() {
            updateScore('CharacterC');
            console.log('CharacterC (Fox) score increased:', scores);
        });

        document.querySelector('.opt-btn-4').addEventListener('click', function() {
            updateScore('CharacterD');
            console.log('CharacterD (Bear) score increased:', scores);
        });

        document.querySelector('.opt-btn-5').addEventListener('click', function() {
            updateScore('CharacterE');
            console.log('CharacterE (Bunny) score increased:', scores);
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


    document.addEventListener("DOMContentLoaded", function () {
        // Function to update the page with the correct character details
        function updateCharacter(characterKey) {
            const character = characters[characterKey];
            
            // Update the character name
            document.querySelector('.specialHighlight').textContent = character.name;

            // Update the character image
            document.querySelector('.character-img').src = character.image;

            // Update the description
            document.querySelector('.description p').innerHTML = `<span class="highlight">${character.description}</span>`;

            // Update the deeper analysis
            document.querySelector('.analysis p').innerHTML = character.analysis;

            // Update the compatibility
            const compatibility = document.querySelectorAll('.analysis h3 + p')[1];
            compatibility.innerHTML = `Your personality matches well with the <span class="highlight">${character.compatibility}</span>`;
        }

        // Example of selecting a character based on some condition (this could be based on user interaction or stored data)
        const selectedCharacter = localStorage.getItem('selectedCharacter') || 'mouse'; // Default to 'mouse'
        updateCharacter(selectedCharacter); // Update the page with the selected character
    });
