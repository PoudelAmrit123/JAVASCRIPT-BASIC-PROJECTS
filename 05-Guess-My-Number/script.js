
'use strict';

  // Dom manupulation basic 
  /*
    console.log( document.querySelector('.message').textContent) ;
   

    document.querySelector('.number').textContent = 13 ;

    document.querySelector('.guess').value = 25 ;
    
    console.log( document.querySelector('.score').textContent);

  */


      const secertnumber = Math.trunc(Math.random()*20)+1 ;

      let score = 20 ;


      document.querySelector('.number').textContent = secertnumber ;
    document.querySelector('.check').addEventListener('click' , function () {
        const guess =Number( document.querySelector('.guess').value); 
        console.log( guess);

 
         if (!guess) {
             document.querySelector('.message').textContent = '⛔ No Number ';
             
         } else if ( guess === secertnumber){
             document.querySelector('.message').textContent = ' 🎉🎉 Correct Nunmber...'

             document.querySelector('.label-highscore').textContent = score ;
         } else if ( guess > secertnumber){

            document.querySelector('.message').textContent = ' 📈Too High...'
  score -- ;
   document.querySelector('.score').textContent = score ;
         }
         else if ( guess < secertnumber){
            document.querySelector('.message').textContent = ' 📉 Too Low...'
            score -- ;
            document.querySelector('.score').textContent = score ;
         }


    });
