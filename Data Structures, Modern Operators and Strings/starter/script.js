'use strict';

// `  `

   
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
     }
  }


  //Spread Operator

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


























  // Destructing Object and passing only object using function 
   /*
     oderdelivery : function( {time , address ,  mainIndex ,  secondIndex} ){

      console.log( ` Order received!  ${this.starterMenu[mainIndex]} and ${this.mainMenu[secondIndex]}  will be delive rd at ${time}  in ${address}`);
     } , 
  

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

