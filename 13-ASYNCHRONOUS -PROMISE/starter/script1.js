// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getcountrycode = function (country) {
  //country 1st
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      // country 2nd
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => renderError(` somethings went wrong ${err.msg}Try again `));
};

getcountrycode('nepal');




      
  
///////////////////////////////////////

// Our First AJAX Call: XMLHttpRequest
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(request.responseText);

    console.log('cool');
    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');


   */

///////////////////////////////////////
/*

 const renderCountry = function (className ) {
         const request = new XMLHttpRequest();
         request.open('GET' , 'https://restcountries.com/v3.1/name/${className}');

  request.send();

     request.addEventListener('load' , function(){

     const  data  = JSON.parse(request.responseText);

         const html = `
         <article class="country ${className}">
         <img class="country__img" src="${data.flag}" />
         <div class="country__data">
         <h3 class="country__name">${data.name}</h3>
         <h4 class="country__region">${data.region}</h4>
           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
         <p class="country__row"><span>👫</span>${(
             +data.population / 1000000
             ).toFixed(1)} people</p>

             </div>
             </article>
             `;
             countriesContainer.insertAdjacentHTML('beforeend', html);
             countriesContainer.style.opacity = 1;
            })
            };

            renderCountry('usa');


               */

// CALL back hell

/*
              
    setTimeout(() => {
  console.log('1 sec has passed');

         setTimeout(() => {
    console.log('2 sec has passed');
             setTimeout(() => {
      console.log('3 sec has passed');

              setTimeout(() => {
        console.log('4 sec has passed');
                setTimeout(() => {
          console.log('5 sec has passed');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


  */

// codings challenges 1st challenges
/*

     const whereAmI11 = function ( lan , log ){
       fetch(`https://geocode.xyz/${lan},${log}?geoit=json`)
       .then ( res => res.json()  )
       .then( data =>  {
        console.log(`You are in ${data.city}, ${data.country}`);
         console.log(data) ; 
        
         return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
       }).then( res => res.json()).then( data => renderCountry(data[0]) ).catch( err => console.error(`${err.message} 💥 `) )
     }
 


       whereAmI11(52.508, 13.381);

         */

// Event loop in practise

/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end');


 */

/*
const lottery = new Promise(function (resolve, reject) {
  console.log(` Lootery draw is happing 🔮`);
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You Win  💰');
    } else {
      reject(new Error('You loose 💩'));
    }
  }, 2000);
});

lottery.then(res => console.log(res)).catch(err => console.error(err));

 */

   // Geolocation Api
    /*

const getPosition = function () {
  return new Promise(function (resolve, reject) {

    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};

  getPosition().then( res => console.log(res))

   */




      // Coding challenge no 2


        /*
      
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));


    */

        // Async and await 
        /*

  const wherami = async function (country ){
   const res =  await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
console.log(res);
    const data = await res.json();
  } ;
    wherami('nepal');

    console.log('First');
    
      
    */


        // Handling Error
        /*
      finding the error and handling the error in async and wait function using try catch function 


          i.e 

          try {
            
          } catch (error) {
            
          }

   By wrapping the entire code in the try function 

  
    */
  // Running promises in parallel with the help of the promise all in async await function 
  
     Promise.all()









