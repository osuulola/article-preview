let share = document.getElementById('share');
let show = document.querySelector('.visible');

share.addEventListener('click', e =>{
   
    
    if (show.style.display == 'none'){
        show.style.display = 'block';
    }
    else show.style.display = 'none';
    
   
})


