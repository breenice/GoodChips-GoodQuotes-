let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = 
  [
    'You deserve good things',
    'You are capable, worthy, and strong',
    'You are in control of your life',
    'You are not defined by your past mistakes',
    'Change can start now',
  ];

btn.addEventListener('click', function(){
  var positiveQuote = quote[Math.floor(Math.random() * quote.length)]
  output.innerHTML = positiveQuote;
})
