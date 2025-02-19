let currentStep = 0;
let answers = [];

function showReadyScreen() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('ready-screen').style.display = 'block';
}

function startQuiz() {
    document.getElementById('ready-screen').style.display = 'none';
    document.getElementById('scene-screen').style.display = 'block';
    showScene(currentStep);
}

function showScene(sceneIndex) {
    const scene = quizData.scenes[sceneIndex];
    document.getElementById('scene-title').textContent = `Scene ${scene.id}!`;
    document.getElementById('scene-background').textContent = scene.background;
    document.getElementById('scene-text').textContent = scene.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    scene.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option.text;
        button.onclick = () => handleAnswer(option.type);
        optionsContainer.appendChild(button);
    });
}

function showResult() {
    const resultType = calculateResult();
    const result = quizData.results[resultType];
    
    document.getElementById('scene-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';
    document.getElementById('result-animal').textContent = result.title;
    document.getElementById('result-description').textContent = result.description;
    
    // Add closing message
    const closingElement = document.createElement('p');
    closingElement.className = 'result-closing';
    closingElement.textContent = result.closing;
    document.querySelector('.result-content').insertBefore(
        closingElement,
        document.querySelector('.compatibility')
    );
}

function handleAnswer(answer) {
    answers.push(answer);
    
    if (currentStep < quizData.scenes.length - 1) {
        currentStep++;
        showScene(currentStep);
    } else {
        showResult();
    }
}

function showResult() {
    const resultType = calculateResult();
    const result = quizData.results[resultType];
    
    document.getElementById('scene-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';
    document.getElementById('result-animal').textContent = result.title;
    document.getElementById('result-description').textContent = result.description;
}

function resetQuiz() {
    // Reset variables
    currentStep = 0;
    answers = [];
    
    // Hide results and show welcome screen
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
}

function calculateResult() {
    const counts = answers.reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});
    
    return Object.entries(counts).reduce((a, b) => 
        (b[1] > a[1] ? b : a)
    )[0];
}

function shareResults() {
    // Implement sharing functionality
    alert('Share functionality coming soon!');
}