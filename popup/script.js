const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');

trigger.addEventListener('click', ()=>{
    modalWrapper.classList.add('active');
});

closeBtn.addEventListener('click', ()=>{
    modalWrapper.classList.remove('active');
});



   