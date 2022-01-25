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





const getcountrycode = function (country) {

  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    });
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
