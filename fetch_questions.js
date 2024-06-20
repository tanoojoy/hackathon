document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popup');
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const quizForm = document.getElementById('quizForm');

    openPopupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(quizForm);
        const selectedAnswer = formData.get('answer');
        if (selectedAnswer) {
            alert(`You selected: ${selectedAnswer}`);
        } else {
            alert('Please select an answer.');
        }
        popup.style.display = 'none';
    });

    question_1();
});

function question_1(){
    var question = document.getElementById("question");
    var settings = {
        "url": "https://curtin-hackathon-e6d04ff2588d.herokuapp.com/get_question1",
        "method": "GET",
      };
      
    $.ajax(settings).done(function (response) {
        console.log(response.question);
        question.innerHTML = response.question;
    });
}