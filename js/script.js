const modal = document.querySelector('.modal-equip');
const buttons = document.querySelectorAll('.button-equip');

function openModal() {
    modal.style.display = 'flex';
    console.log('Modal opened');
}

function closeModal() {
    modal.style.display = 'none';
    console.log('Modal closed');
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        openModal();
        e.stopPropagation();
    });
});

document.addEventListener('click', (e) => {
    if (modal.style.display === 'flex' && e.target !== modal && !modal.contains(e.target)) {
        closeModal();
    }
});

modal.addEventListener('click', (e) => {
    e.stopPropagation();
});
