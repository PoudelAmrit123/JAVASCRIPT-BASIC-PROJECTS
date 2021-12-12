'use strict';

 //   ``

 // selecting the element
const score0 = document.querySelector('#score--0');

const score1 = document.getElementById('score--1');

const current0 = document.querySelector('#current--0') ;

const current1 = document.querySelector('#current--1') ;


 const dice = document.querySelector('.dice');
  const btnnew = document.querySelector('.btn--new');
  const btnroll = document.querySelector('.btn--roll');
  const btnhold = document.querySelector('.btn--hold');
// starting condition

  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');


    let currentscore =0 ;

  
  btnroll.addEventListener('click' , function(){

   const dicen = Math.trunc(Math.random()*6)+1;
  console.log(dicen);
   dice.classList.remove('hidden');

   dice.src =   `dice-${dicen}.png` ;

  if ( dicen != 1){

   currentscore += dicen ;
  current0.textContent = currentscore ;
  } else {
      
  }
   

  })