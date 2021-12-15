'use strict';

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


    }
  

  // openingHours: {
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
  // },
};

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