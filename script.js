document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const bgUrl = card.getAttribute('data-bg-url');
        document.querySelector('.section1').style.backgroundImage = `url(${bgUrl})`;
    });
});
