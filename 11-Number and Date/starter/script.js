'use strict';


`  ` 
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////`
// Functions

const displayMovements = function ( acc , sort = false) {
  containerMovements.innerHTML = '';
  
  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {

    const dategain =  new Date (acc.movementsDates[i]);
    const year = dategain.getFullYear();
    const month = ` ${dategain.getMonth() + 1}`.padStart(2, 0) ; 
    const date =  ` ${dategain.getDate()}`.padStart(2, 0) ;  

   
    const displaydate =  `  ${year} / ${month} / ${date}  ` ;

    const type = mov > 0 ? 'deposit' : 'withdrawal';


    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date"> ${ displaydate}</div>

        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

  // Dates Showing 
  const now = new Date ( );
  const year = now.getFullYear();
  const month = ` ${now.getMonth() + 1}`.padStart(2, 0) ; 
  const date =  ` ${now.getDate()}`.padStart(2, 0) ;  
 
 const hour = now.getHours();
 const min = now.getMinutes();


 labelDate.textContent =  ` ${year} / ${month} / ${date} , ${hour} : ${min} ` ; 










///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

     //Adding Date
     currentAccount.movementsDates.push ( new Date ().toISOString);
     receiverAccount.movementsDates.push ( new Date ().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

      //Adding the time  event
    currentAccount.movementsDates.push( new Date ());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



       // Number introduction 

        /*

   console.log(23 === 23.0);

     //Conversion

     console.log(Number('23'));
     //But there  is a better way of doing this conversion function

     console.log(+'23');

        // ParseInt 
        console.log(Number.parseInt('2rem'));
        console.log(Number.parseFloat('2.3rem'));  // HEre by using parseInt and parseFLoat function it help us to write the number excluding the words

  // Checking If the number is number or not 
  console.log(Number.isFinite('23'));//False
  console.log(Number.isFinite(23)); //true


  */


  // Math rounding 

      /*
    console.log(Math.sqrt(9));
    console.log( 25 ** (1 / 3)); // that is probably the only way of finding the cubic root of the number 

    console.log(Math.max(2 , 32 ,54 , 59));
    console.log(Math.max(2 , 32 ,' 54' , 59)); //It infact did type coersion so the result is still 54
    console.log(Math.min(2 , 32 ,54 , 59));

      // Generating  Random Number 

        console.log(Math.trunc(Math.random()* 6) +1 );

          // Now for genrating the random value brween the certain range 

          const randomINt = function ( max , min ){

            return  Math.trunc(Math.random()* ( max - min)) + min ;

          };

         console.log( randomINt( 10 , 20));


          // Rounding Integer Number  

          console.log(Math.trunc(23.3));

          console.log(Math.round(23.3));
          console.log(Math.round(23.9));

           // ceil Round it towards Heigher
          console.log(Math.ceil(23.3));
          console.log(Math.ceil(23.9));

            // FLoor Round it towards Lower
          console.log(Math.floor(23.3));
          console.log(Math.floor(23.9));

            // It is better to use floor as trunc evenn if they are bit like similar But floor also work for the negative number
       
            


       // Rounding Integer Number  

         
  console.log((2.7945).toFixed (2));
     // Then this will round of the number and only print to 2.79 


      */

     /*

     // Remainder Operator 

         console.log( 5 % 2);
          //   Here result is 1 . Thats all about the remainder 


            */


          // Big Int
          /*
          A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by appending n to the end of an integer literal, or by calling the BigInt() constructor (but without the new operator) and giving it an integer value or string value.

          */


            //  Date 

              /*

                  
            const now = new Date ();
            console.log(now);

            console.log( new Date ( 2002 , 1 , 31 ));
            console.log( new Date ( 2037 , 1 , 31 , 12 ,35 ,45 ));

            console.log(account1.movementsDates[0]);

            console.log( new Date ( 0));

              // working with date 

              const future = new Date ( 2033 , 10 , 5 );
              console.log(future.getFullYear());
              console.log(future.getMonth());
              console.log(future.getDate());
              console.log(future.getDay());
              console.log(future.toISOString());
              
 console.log( Date.now());

   
 */



    // operation With Date 

          // We can do like today yesterday or 3 days ago with the operation with date 
          
          


          // INTERLIZATION  WITH DATE 

            // Read The documentation 

            