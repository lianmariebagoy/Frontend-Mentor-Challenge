document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const answer = item.nextElementSibling;
        const toggleBtn = item.querySelector('img');
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggleBtn.src = '/faq/assets/images/icon-plus.svg';
        } else {
            answer.style.display = 'block';
            toggleBtn.src = '/faq/assets/images/icon-minus.svg';
        }
    })
});