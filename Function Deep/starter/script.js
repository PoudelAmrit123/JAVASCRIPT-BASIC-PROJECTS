'use strict';


   // Moving from the basic introduction to some more Function

<<<<<<< HEAD
  //Default parameter



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
=======
   const happy = 'Awesome'
  console.log(` Function is  ${happy} ! 😊`);





>>>>>>> 1c85cbd43ac843a2a11b10ebe6123e762d0fa0df
