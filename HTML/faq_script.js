document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        question.nextElementSibling.classList.toggle('faq-answer-show');
      });
    });
  });
  