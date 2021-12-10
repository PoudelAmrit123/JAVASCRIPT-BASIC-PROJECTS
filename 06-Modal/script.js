'use strict';

 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');

 const btnclose = document.querySelector('.close-modal');

 const btnsopen = document.querySelectorAll('.show-modal');

  console.log(btnsopen);


   for ( let i=0 ; i< btnsopen.length ; i++){
      (btnsopen[i].addEventListener('click' , function(){

       
   console.log('button clicked');
        // modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

    document.querySelector('.modal').classList.remove('hidden');

   
      }));

  
        btnclose.addEventListener('click' , function(){

   modal.classList.add('hidden');
   overlay.classList.add('hidden');

        });

        overlay.addEventListener('click' , function(){
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        })


   }

   





