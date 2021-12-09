
'use strict';

  // Dom manupulation basic 
  /*
    console.log( document.querySelector('.message').textContent) ;
   

    document.querySelector('.number').textContent = 13 ;

    document.querySelector('.guess').value = 25 ;
    
    console.log( document.querySelector('.score').textContent);

  */


     let secertnumber = Math.trunc(Math.random()*20)+1 ;

      let score = 20 ;


     
    document.querySelector('.check').addEventListener('click' , function () {
        const guess =Number( document.querySelector('.guess').value); 
        console.log( guess);

   // Input is wrong
         if (!guess) {
             document.querySelector('.message').textContent = '⛔ No Number ';
             
         }
         
         // correct guess 

         else if ( guess === secertnumber){
             document.querySelector('.message').textContent = ' 🎉🎉 Correct Nunmber...'

             document.querySelector('.label-highscore').textContent = score ;

             document.querySelector('.number').textContent = secertnumber ;


             document.querySelector('body').style.backgroundColor = '#60b347'

             document.querySelector('.number').style.width = '30rem';
         }
         
          // input is too high 

         else if ( guess > secertnumber){

               
             if (score > 1) {
                document.querySelector('.message').textContent = ' 📈Too High...'
                score -- ;
                 document.querySelector('.score').textContent = score ;
             } else {
                 document.querySelector('.message').textContent = ' 🥴You lost the game '
                 document.querySelector('.score').textContent = 0 ;
             };
           
         }

  // input is too low..


         else if ( guess < secertnumber){
            if (score > 1) {
                document.querySelector('.message').textContent = ' 📈Too Low...'
                score -- ;
                 document.querySelector('.score').textContent = score ;
             } else {
                 document.querySelector('.message').textContent = ' 🥴You lost the game '
                 document.querySelector('.score').textContent = 0 ;
             };
           
         }


    });

      // For clicking again

    document.querySelector('.again').addEventListener('click' , function () {

        secertnumber = Math.trunc(Math.random()*20)+1 ;


      document.querySelector('.score').textContent = 20 ;

      document.querySelector('body').style.backgroundColor = '#222' ;

      document.querySelector('.number').style.width = '15rem';

document.querySelector('.message').textContent = 'start quessing ...' ;

     document.querySelector('.number').textContent = '?'

     document.querySelector('.guess').value  = ''
       
    });








