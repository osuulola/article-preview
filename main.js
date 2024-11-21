let share = document.getElementById('share');
let show = document.querySelector('.visible');

share.addEventListener('click', e =>{
   
    
    if (show.style.visibility == 'hidden'){
        show.style.visibility = 'visible';
    }
    else show.style.visibility = 'hidden'
    
   
})


