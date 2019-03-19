// GET MODAL ELEMENT
const modal = document.getElementById('simpleModal');

//GET OPEN MODAL BUTTON
const modalBtn = document.getElementById('modalBtn');

//CLOSE BUTTON
const closeBtn = document.querySelector('.closeBtn');

//LISTEN FOR CLICK
modalBtn.addEventListener('click', openModal);

//LISTEN FOR CLOSE BUTTON
closeBtn.addEventListener('click', closeModal);

//OUTSIDE CLICK TO CLOSE THE MODAL
window.addEventListener('click', clickOutside);

//FUNCTIONS

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function clickOutside(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}
