'use strict';

       ``




   // Moving from the basic introduction to some more Function


  //Default parameter

  /*




  const bookings = [];
   const createBooking = function  (FlightNum , Noofpassenger=1 , price = 199 *Noofpassenger) {
// here in Es6 we can set default value right away in the function directly and can also set the value which is predefined like that of passenger 

      const booking = {
         FlightNum ,
         Noofpassenger , 
         price ,
      };
      console.log(booking);
      bookings.push(booking);
   }
   createBooking('Lh20'  )
   createBooking('Lh20' , 2 , 1200 )
   createBooking('Lh20' , undefined , 1200 ) //If we want that default value but as we cannot skip the aargument 
   
   
   console.log(bookings);


       */




   // Passing Argument Functiality

     /*
       const flight = 'Lh290';

       const jonas = {
          name : 'Amrit Poudel' ,
          passport : 234234124 ,

       };

       const checkin = function (flightnum , passenger ) {

         passenger.name = 'Mr.' + passenger.name ;

         if (passenger.passport ===234234124  ) {
            alert(' Checked! In');
            
         }else {
            alert(' Invalid Passport');
         }

          
       }

       checkin(flight , jonas);
       console.log(flight);
       console.log(jonas);

       */






       //FUNCTION ACCEPTING CALLBACK




 /*

       const oneword = function (str){
 return str.replace(/ /g , '').toLowerCase();
  
       };


       const Firstcapatial  = function (str){

  const [ first , ...last ] = str.split(' ');

      return [first.toUpperCase() , ...last].join(' ');
       };

       const trimmed = function (str , fn ) {


         console.log( `Original string : ${str}`);
          console.log( ` Transfored String : ${fn(str)}`);
       };

       trimmed('JavaScript is good language!' , Firstcapatial);
       trimmed('JavaScript is good language!' , oneword);


 */



       //FUNCTION RETURNING FUNCTION
       /*


       const greating = function (greating) {

         return function (name) {
            console.log( `${greating}! ${name}`);
            
         }
          
       }
  const greatingHEy = greating('Hi');
         greatingHEy('Amrit');
         greating('Hi')('Amrit');  //OR we can simply write like this 

  // Here First greating function is called and it takes an argument greating i.e HI and store the value in const greatingHEy which again become function on its own and then for the retun part inside the function it work as the calling function

     // Arry Function 

     const greatingArr = greating => name =>  console.log( `${greating}! ${name}`);

     greatingArr('Hello ' )('Amrit');


 

       */


     // CALL AND APPLY METHOD

      /*
        
   //1 . CALL METHOD

 const tara = {
           airline : 'tara' , 
           taracode : 'LH' , 
           bookings : [ ],

           book : function (flightnum , name) {
              console.log(` ${name} booked a seat on ${this.airline} flight ${this.taracode} ${flightnum}.`     );

 this.bookings.push({ Flight :   `${this.taracode}  , name` })


         } ,
    
        }

             tara.book(239 , 'Amrit Poudel');
             tara.book(122 , 'Sagar Sharma');


             const yeti = {
               airline : 'yeti' , 
               taracode : 'EW' , 
               bookings : [ ],
    
            };

            const book = tara.book ; // HEre we specify book as equal to the yeti book value 
 
            book.call( yeti , 19 , 'Amrit POudel');
            console.log(yeti); 
             // HEre we with the help of the CALL FUnction we can specify the this keyword 



  //Apply Method 
      //This method is similar to that of call method but it took the argument in an arry like

      const flightdata = [ 233 , ' SHyam '];

      book.apply ( yeti , flightdata) ; 
      console.log(yeti );

       // But we can use spread operator in the modern java script so nowdays apply method is rarely used
       


          //Bind Function

         //    By using the bind function we shouldnot be input the call method time and again . BInd function create the whole new function

         // const Bindyeti = book.bind(yeti);
         const Bindtara = book.bind(tara);


    Bindtara(23 , 'raju');
    Bindtara(31 , 'Himanshu');

        // we can also prest the value using bind function

const Bindyeti = book.bind(yeti , 50);//HEre 50 value is preset value 

          Bindyeti ('raju');



          //Add event listener 

          yeti.planes = 300 ; 

          yeti.buyplanes = function () {
         

             this.planes++;
             console.log(this.planes);
          }

document.querySelector('.buy').addEventListener('click' , yeti.buyplanes.bind(yeti));//HEre we need to pass bind function 



    */


    // Coding Challenge NO 1

  
     /*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
 
        // Get answer

        registernewnumber(){

           const answer = Number( prompt(  `${this.question} \n ${this.options.join('\n')} \n (write option number) `) );


           console.log(answer);


             //To get answer

             typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++ ;


             console.log(this.answers);
        } , 

      
};


document.querySelector('.poll').addEventListener('click' , poll.registernewnumber.bind(poll));




 */


   // iMMEDIATELY INVOKED FUNCTION EXPRESSION


    /*
      const onlyonce = function(num){
         console.log(  ` This will  never agian ${num} `);
      }
      onlyonce(0);
      onlyonce(1);
 // But actually it works and can be called anytime in the function so we do this to make only one time using function 
  
  (function () {

   console.log( ` This is also never run agian `);
     
  }) ();

   // Actually by wrapping the function call we can make it ine time run function where we will call it only once and write after declaring the function
   
   

      */



    //CLOUSERS


  /*

    const securebooking = function(){
   let passengercount =  0 ; 

   return function (){
      passengercount ++;
      console.log(  ` ${passengercount} passenger`);
   }



    }

   const booker =  securebooking();

booker ();
booker ();
booker ();

 */



  // Watch youtube video for more clreaing the concept bcx its ver  important to undertand the closure 


    //Coding Challenge ( CLosure )


    







































































































 









