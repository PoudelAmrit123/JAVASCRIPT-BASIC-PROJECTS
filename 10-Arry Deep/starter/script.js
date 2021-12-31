'use strict';


`  `





/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,




};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  
  
  
};








const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



    const displayMovements = function (movements) {
      
     containerMovements.innerHTML =''; 
   movements.forEach( function ( mov , i){

 const type =  mov > 0 ? 'deposit' : 'withdrawal' ;
   
  const html = `
  
  <div class="movements__row">
  <div class="movements__type movements__type--${type}"> ${i+1} ${type}</div>
  
  <div class="movements__value"> ${mov}€</div>
  
  ` ;

  containerMovements.insertAdjacentHTML('afterbegin' , html )


   });
  

  };

   displayMovements(account1.movements);





   // Displaying the total balance

const displaybalance = function( movement ){


  const  balance = movement.reduce ( function (acc , curr , i ,arr){

    return  acc + curr ; 
  } , 0 );
  console.log(balance);


  labelBalance.textContent = ` ${balance} €`
  ;
 };

 displaybalance(account1.movements)


   // Display Summary

     const calcdisplaysummary  = function ( movements){

  const income  =  movements.filter( function (mov){
    return mov > 0 
  }).reduce( function ( acc , cir ){
    return acc + cir ;
  },0);

   labelSumIn.textContent = `${income}€  `
    
   const outgoing  =  movements.filter( function (mov){
    return mov < 0 
  }).reduce( function ( acc , cir ){
    return acc + cir ;
  },0);
  
  labelSumOut.textContent = `${Math.abs(outgoing)}€  `
  
  

  const  interst = movements.filter( function( mov ){
    return mov > 0 ;
  } ).map( function ( deposit){
     return deposit * 1.2/100 ;
  }).filter( function ( int  , i , arr){
    return int >= 1 ; 
  }).reduce( function ( acc , int){
     return acc + int ; 

  } , 0 );
  
  labelSumInterest.textContent = `${Math.abs(interst)}€  `


  }
     calcdisplaysummary(account1.movements);

      // Computing Name 

    

    const createusername = function (accs){

          accs.forEach( function (acc) {
            acc.username  = acc.owner.toLowerCase().split(' ').map( function (name){

              return name[0] ;     
             }).join('') ;
          });

     

     
    };

createusername(accounts);
































































/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////








     // Simple Method in the arry function
     /*





  let arr  = [ 'a ' , 'b' , 'c' , 'd' , 'e'];
       //SLice 
  console.log(arr.slice(2));
  console.log( arr.slice(2 , 4));// HEre it will slice form 2 and difference between 4 and 2 .
  console.log(arr.slice(-2));
  console.log(arr.slice());

       
   //SPLICE 
   console.log(arr.splice(2));
      //  It will splice the element form the 2 element and it will not include in the arr 
   console.log(arr);


   // Reverese

   let arr2  = [ 'a ' , 'b' , 'c' , 'd' , 'e'];


console.log(arr2.reverse());
console.log(arr2);  // It mutate the arry i.e forms the new arry doing the task that is allowed to do

     // Contact 

      // HEre in the contact method it helps us to join the two arry 


 */












      // More Method in the Arry
      /*

      const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

      

//   for ( const movement of movements){

// if(movement <0){
//   console.log( ` You deposite ${movement} rupee`);
// } else {
//   console.log( ` You withdraw ${Math.abs(movement)} rupee`);
// }

//   }


    // OR we can use for Each FUncton  mehod in the arry 
    movements.forEach( function (movement , i , arr){

      if(movement <0){
        console.log( ` Movement ${i+1}: You deposite ${movement} rupee`);
      } else {
        console.log( ` Movement ${i+1}: You withdraw ${Math.abs(movement)} rupee`);
      }

    })





       // ForEach MEthod for Maps and Sets

       
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

   currencies.forEach( function( value , key , map){

console.log(`${key} : ${value}`);

   })


   //Set

   const currenceunique = new Set (['USD' , 'EUR' , 'GBP'])

   console.log(currenceunique);

   currenceunique.forEach( function ( value  , key , map){
    console.log(`${key} : ${value}`);


   })



 */


     



      // Map  , filter , and reduce method 


       /*
  
   const EURtoUSd = 1.1 ; 

    const movementsUSD =  movements.map( function ( mov){

        return mov * EURtoUSd;
     }) ; 

     console.log(movementsUSD);
     console.log(movementsUSD);


    const movementDescription =  movementsUSD.map ( function( mov , i , arr ){

      if(mov <0){
        return( ` Movement ${i+1}: You deposite ${mov} rupee`);
      } else {
        return( ` Movement ${i+1}: You withdraw ${Math.abs(mov)} rupee`);
      }

     })
  //  WE DONOT NEED TO CALL THE FUNCTION BCZ THE MAP METHOD CALL THE FUNCTION ITSELF 

console.log(movementDescription );





 */



  // FILTER METHOD


   /*
  const deposit = movements.filter( function (mov) {

    return mov > 0 ;
     
   });

      console.log(deposit);



const withdrawl =  movements.filter( function (mov) {
   return  mov < 0 ;
  
})
console.log(withdrawl);

  */





   //  The reduce Method

  /*
   console.log(movements);

   const balance = movements.reduce( function (acc , curr , i  ,arr) {
     return acc + curr ;

     
   } , 0);// Here it takes  four different element that is accumulator , current value , iteration , and  whole arry 

   // Here will declare 0 as the ddefault or starter value


   console.log(balance);



*/




  // Magic of chaining Method
 
  /*

const eurotousd = 1.1 ;
  //Pipeline 
const totaldeposite = movements.filter(function ( mov){
  return mov > 0 ; 
} ).map( function ( mov){
   return mov * eurotousd ;
}).reduce( function ( acc , cir ){
    return acc + cir ;
} , 0);


console.log(totaldeposite);


 */










