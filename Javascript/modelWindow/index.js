'use strict';
const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnClModal = document.querySelector('.close-modal');
const btnOpModal = document.querySelectorAll('.show-model');
const hid = document.querySelector('.hidden');

const open = function(){
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const close = function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0;i<btnOpModal.length;i++){
    btnOpModal[i].addEventListener('click',open);
}

btnClModal.addEventListener('click',close);
overlay.addEventListener('click',close);

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !model.classList.contains('hidden'))
        {
           close();
        }
}
);