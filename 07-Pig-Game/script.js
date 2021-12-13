'use strict';

 //   ``

 // selecting the element
 const player0 =document.querySelector('.player--0');
 const player1 =document.querySelector('.player--1');

const score0 = document.querySelector('#score--0');

const score1 = document.getElementById('score--1');

const current0 = document.querySelector('#current--0') ;

const current1 = document.querySelector('#current--1') ;


 const dice = document.querySelector('.dice');
  const btnnew = document.querySelector('.btn--new');
  const btnroll = document.querySelector('.btn--roll');
  const btnhold = document.querySelector('.btn--hold');
// starting condition

       

 let  scores , activeplayer ,  currentscore , playing  ;

       const init  = function(){
       
        scores = [ 0 , 0];
        activeplayer = 0;
        currentscore =0 ;
        playing = true ;
       
       score0.textContent = 0;
       score1.textContent = 0;
       current0.textContent = 0 ;
       current1.textContent = 0 ;
       dice.classList.add('hidden');
       
       
       player0.classList.add('player--active');
       player1.classList.remove('player--active');
       
       
       player0.classList.remove('player--winner');
       player1.classList.remove('player--winner');
       
       
       }

        init();
       
       
       btnroll.addEventListener('click' , function(){

      if ( playing){
   const dicen = Math.trunc(Math.random()*6)+1;
  console.log(dicen);
   dice.classList.remove('hidden');

   dice.src =   `dice-${dicen}.png` ;

  if ( dicen != 1){

       
   currentscore += dicen ;
    
    document.getElementById(`current--${activeplayer}`).textContent = currentscore;


  } else {


 
    document.getElementById(`current--${activeplayer}`).textContent = 0;

activeplayer = activeplayer === 0 ? 1 : 0 ;

      currentscore = 0;
      
    document.getElementById(`current--${activeplayer}`).textContent = currentscore;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');  


  }
   

    }  })


btnhold.addEventListener('click' , function(){
  if ( playing){
      
scores[activeplayer] += currentscore ; 

 document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer] ;

      if ( scores[activeplayer ] >= 20){

          document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')

          dice.classList.add('hidden');

          document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');


 playing = false ;




       }  else {
activeplayer = activeplayer === 0 ? 1 : 0 ;

      currentscore = 0;
      
    document.getElementById(`current--${activeplayer}`).textContent = currentscore;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');  

      }
    }
});



  btnnew.addEventListener('click' , init);























