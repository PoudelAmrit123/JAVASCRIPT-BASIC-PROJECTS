'use strict';

// `  `

   
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const   openingHours =  {
  thu: {
    open: 12,
    close: 22,
  },


  fri: {
    open: 11,
    close: 23,
  },

   
   
   
   
   
   
   
   
   
   

  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },

}








const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order : function (mainIndex , secondIndex){
  
       return [this.starterMenu[mainIndex] ,this.mainMenu[secondIndex]] 


    } , 

     orderfood: function (indg1 , indg2 ,indg3) {
   console.log(` Here is your declicious pasta with ${indg1} , ${indg2} and ${indg3}.  `);    
     },
 // Es6 enhanced obejct literals 
               openingHours, 
      // openingHours1 : openingHours , //Basic obecjt literals.

     /*
     openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
  
  
      fri: {
        open: 11,
        close: 23,
      },
  
  
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
  
    }



     */
  }


       
       //OPTIONAL CHAINING 
  

         /*
          //without optional chainging
      if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

       // With Optional chaining 
       
 console.log(restaurant.openingHours?.mon?.open);
   // if openinghours exists then it moves to the monday and checks whether the mon exists or not if exists than it checks for open .

  // OPtional Chaning in Arry 

      const users = [ { name: ' Amrit' , email : 'amritpoudel433@gmail.com' }];

 console.log( users[0]?.name ?? 'user empty error' );

 console.log( users[0]?.email ?? 'no email exist');


     // here it checks weather the users email exits or not it exixts then it moves towards the next line of the code which is actually nullish operator which operate according to its properties


    
 */


          // Looping Obejct _ Object key_Values 



          //properties name 
  const properties  = Object.keys(openingHours);
  console.log(properties);

 let  opendays = ( `  we are open for ${properties.length} days : `);


  for( const day of properties){
    

 
    opendays += ` ${day}, ` ;
  }

  console.log(opendays);
             



  // properties Value 

   const openvalues  = Object.values(openingHours);
   console.log(openvalues);

   //entires Obejct

   const entiresobject = Object.entries(openingHours);
   console.log(entiresobject);

      //  [ key ,values ]
   for(const  [key , {open , close }]  of entiresobject){
     console.log(` On  ${key} we open at ${open } and close at ${close}. `);
   }

L



          


     































































































































     // OBJECT LITERALS


    //  const   openingHours =  {
    //   thu: {
    //     open: 12,
    //     close: 22,
    //   },
  
  
    //   fri: {
    //     open: 11,
    //     close: 23,
    //   },
  
  
    //   sat: {
    //     open: 0, // Open 24 hours
    //     close: 24,
    //   },
  
    // }

  




    //REST OPERATOR
    //Use Mainlyin destructing

    /*

       const [a ,  b , ...others1  ] = [ 1  , 2 ,4 , 9];
console.log(a ,  b  , others1);

   // in obejct 
     
    const {sat , ...others} = restaurant.openingHours;

    console.log(others);


    //function

    const add = function(...numbers1 ){
      let sum = 0 ; 
     for ( let i =0 ; i<numbers1.length ; i++){
       sum += numbers1[i];
     }
       
 console.log(sum);
    };

       add(2 , 3);
       add(2 , 5 , 7 ,3);
       add(2 , 3  ,6, 3 , 9);
       add(2 ,1 , 8 ,  3);

        const x = [10 , 20 , 30 ];
        add(...x);
       


 */


          // Spread VS Rest 


         //  const arr= [2 , 4 , 5 , 6 , 8];

          // if we need to pass this arr to the function we can pass this  using spread operator like callingfunction(2 , 4 , ...others)  instead of typing  all the parameters .


        //  and there in the function argument we can simply we rest operator like function(...others) which is as equal to passing the whole arry 
























  //Spread Operator
 /*
       const arr = [ 1,  2, 3 , 4];

       const newarr = [ 6 , 5 , ...arr];
       console.log(newarr);
       console.log(...newarr);



  const newarr1 = [...restaurant.mainMenu , 'Pasta'];//we are forming the new arry not manupulating the main menu arry 
  console.log(newarr1);
 

    //copying the arry 

    const mainmenucopy = [...restaurant.mainMenu];
   console.log(mainmenucopy);
    // join 2 arry

    const joinarry = [ ...restaurant.mainMenu , ...mainmenucopy];
    console.log(joinarry);



  // Iterables : arry , string , maps but not the object

      const name = 'Amrit';

      const lettrs = [ ...name , 's'];
      console.log(lettrs);

       //but it doesnot work on this 

      //  console.log(`  ${...lettrs} poudel `);

   

       // Real world Example 

          const indegrent = [ prompt("Lets make pasta ! Your indegerent 1?") , prompt("Lets make pasta ! Your indegerent 2?") , prompt("Lets make pasta ! Your indegerent 3?")  ];

          restaurant.orderfood(...indegrent);


  */























  // Destructing Object and passing only object using function 
   /*
     oderdelivery : function( {time , address ,  mainIndex ,  secondIndex} ){

      console.log( ` Order received!  ${this.starterMenu[mainIndex]} and ${this.mainMenu[secondIndex]}  will be delive rd at ${time}  in ${address}`);
     } , 
  

 


  }
  
    

}
   
      restaurant.oderdelivery({
  time : '22:30' , 
  address : 'Milan chowk chitwan'  , 
     mainIndex : 2 ,
     secondIndex : 1 ,

      }) ; 








    const { name , categories ,starterMenu } =  restaurant  ; 
 console.log(name , categories , starterMenu);


    // changing  the name of the arry 

      const { name :  Resturnet  , categories  : country } = restaurant ; 

        console.log( Resturnet , country );

         // Nested object 
 //nested object with changing the name 
         const { fri :{ open : o, close : c}} = restaurant.openingHours ; 
         console.log( o , c );


 */

     








         






 /*


        // Destructing the arry //

const arr = [2, 4, 5];

const [x, y, z] = arr;

console.log(x, y, z);

const arr1 = [10, 11, 12];
const [a, b, c] = arr1;
console.log(a, b, c);
  
   console.log(arr1);

     const [ first ,  , , second] = restaurant.categories ; 
    //  leaving the gap we can skip the element of the arry    
  console.log( first  , second);
   // for switching the element of the arry 
    //  [ first , second ] = [second  ,first];   

  console.log( first ,  second);



      // const [main , secondindex ] = ( restaurant.order(2 , 0)); 


           const [ main , secondindex ] = restaurant.order(1 , 0)
      console.log(main  , secondindex);


        const nested = [ 2 , 4 , [5 , 6, 7,8]];
// destructing arry in destruced arry (nested desturcting )

        const [ i ,j , [k , , , l]] =nested ;





        console.log( i ,  j ,  l);

          */


          


        // SHORT CIRCUTING


          /*
 // Short Circuting of the ORR operator
        restaurant.noofguest = 23;

         const guest = restaurant.noofguest  || 10 ;

          console.log(guest);

          //Or will return the first truthy value  or will return the last  value if all of them are falsy 


            // Short Circuting of the AND operator
 

            console.log('hello' && 23 &&  null && 'jonas');

              // Here it will check hello is truthy or falsy as it is truthy it moves on and check weather 23 is truthy or not as it is also the truthy value then it checks null and as it is falsy value the it will log this one 



              // Nullish coalescing
   // It doesnot consider ZEro(0) and empty string ''  as falsy value 
              restaurant.noofguest1 = 0;

              const guest1 = restaurant.noofguest1  ?? 10 ;
     
               console.log(guest1);





    */




               


















































