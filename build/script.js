//Spendings - Last 7 days
const spendings = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

//const test = console.log(spendings[0].amount);


  const monday = document.querySelector('.monday');
  const mondaySpending = document.querySelector('.monday-spending');
  const tuesday = document.querySelector('.tuesday');
  const tuesdaySpending = document.querySelector('.tuesday-spending');
  const wednesday = document.querySelector('.wednesday');
  const wednesdaySpending = document.querySelector('.wednesday-spending');
  const thursday = document.querySelector('.thursday');
  const thursdaySpending = document.querySelector('.thursday-spending');
  const friday = document.querySelector('.friday');
  const fridaySpending = document.querySelector('.friday-spending');
  const saturday = document.querySelector('.saturday');
  const saturdaySpending = document.querySelector('.saturday-spending');
  const sunday = document.querySelector('.sunday');
  const sundaySpending = document.querySelector('.sunday-spending');
  const mondayAmount = document.querySelector('.monday-amount');
  const tuesdayAmount = document.querySelector('.tuesday-amount');
  const wednesdayAmount = document.querySelector('.wednesday-amount');
  const thursdayAmount = document.querySelector('.thursday-amount');
  const fridayAmount = document.querySelector('.friday-amount');
  const saturdayAmount = document.querySelector('.saturday-amount');
  const sundayAmount = document.querySelector('.sunday-amount');
  const balance = document.querySelector('.balance');
  const total = document.querySelector('.total');

 // const locale = navigator.languages;
//balance.textContent = '';

let options = {
  style: 'currency',
  currency: 'USD',
};

const balanceValue = 921.48;
const totalValue = 478.33;

const balanceFormat = new Intl.NumberFormat('en-US', options).format(balanceValue);
const totalFormat = new Intl.NumberFormat('en-US', options).format(totalValue);

//balanceFormat(balance);
balance.textContent = balanceFormat;
total.textContent = totalFormat;

mondayAmount.textContent = `$${spendings[0].amount}`;
tuesdayAmount.textContent = `$${spendings[1].amount}`;
wednesdayAmount.textContent = `$${spendings[2].amount}`;
thursdayAmount.textContent = `$${spendings[3].amount}`;
fridayAmount.textContent = `$${spendings[4].amount}`;
saturdayAmount.textContent = `$${spendings[5].amount}`;
sundayAmount.textContent = `$${spendings[6].amount}`;






  monday.addEventListener('mouseover', function (e) {
    mondaySpending.classList.toggle('hidden');
    mondaySpending.classList.add('mondayAnim');
   
  });

  tuesday.addEventListener('mouseover', function (e) {
    tuesdaySpending.classList.toggle('hidden');
    tuesdaySpending.classList.add('mondayAnim');
  });
  
  
  wednesday.addEventListener('mouseover', function (e) {
    wednesdaySpending.classList.toggle('hidden');
    wednesdaySpending.classList.add('mondayAnim');
  });

  thursday.addEventListener('mouseover', function (e) {
    thursdaySpending.classList.toggle('hidden');
    thursdaySpending.classList.add('mondayAnim');
  });

  friday.addEventListener('mouseover', function (e) {
    fridaySpending.classList.toggle('hidden');
    fridaySpending.classList.add('mondayAnim');
  });

  saturday.addEventListener('mouseover', function (e) {
    saturdaySpending.classList.toggle('hidden');
    saturdaySpending.classList.add('mondayAnim');
  });

  sunday.addEventListener('mouseover', function (e) {
    sundaySpending.classList.toggle('hidden');
    sundaySpending.classList.add('mondayAnim');
  });




  