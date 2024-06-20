document.getElementById('submit-answer').addEventListener('click', function() {
    let answer = document.getElementById('answer').value;
    if (answer == '4') {
        alert('Correct!');
        // Update game status, e.g., reduce enemy health
        let enemyHealth = document.getElementById('enemy-health');
        enemyHealth.textContent = 'Enemy Health: ' + (parseInt(enemyHealth.textContent.split(': ')[1]) - 10);
    } else {
        alert('Incorrect!');
        // Update game status, e.g., reduce player health
        let playerHealth = document.getElementById('player-health');
        playerHealth.textContent = 'Health: ' + (parseInt(playerHealth.textContent.split(': ')[1]) - 10);
    }
    document.getElementById('answer').value = ''; // Clear the input
    const questions = [
        { question: 'What is 2 + 2?', answer: '4' },
        { question: 'What is 5 - 3?', answer: '2' },
        { question: 'What is 3 * 3?', answer: '9' },
    ];
    
    function getRandomQuestion() {
        return questions[Math.floor(Math.random() * questions.length)];
    }
    
    document.getElementById('submit-answer').addEventListener('click', function() {
        let answer = document.getElementById('answer').value;
        let currentQuestion = document.getElementById('question').textContent;
        let correctAnswer = questions.find(q => q.question === currentQuestion).answer;
        
        if (answer === correctAnswer) {
            alert('Correct!');
            let enemyHealth = document.getElementById('enemy-health');
            enemyHealth.textContent = 'Enemy Health: ' + (parseInt(enemyHealth.textContent.split(': ')[1]) - 10);
        } else {
            alert('Incorrect!');
            let playerHealth = document.getElementById('player-health');
            playerHealth.textContent = 'Health: ' + (parseInt(playerHealth.textContent.split(': ')[1]) - 10);
        }
        
        document.getElementById('answer').value = '';
        let newQuestion = getRandomQuestion();
        document.getElementById('question').textContent = newQuestion.question;
    });
    
});
