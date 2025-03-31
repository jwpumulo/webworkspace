// inner_module/02_timer.js

// const {
//   connected
// } = require("process");


function showTime(){

let today = new Date();
console.log(today.toLocaleTimeString());
}
showTime();

const timeout = setTimeout(() => {
  showDate();
  console.log('timeout!');
}, 2000);

let count = 0;
const interval = setInterval(() => {
  showDate();
  console.log('interval %d', count++);
  if (count == 2) {
    clearInterval(interval);


  }
}, 1000);

connected.log('End!');