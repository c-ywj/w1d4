// var countdownGenerator = function (x) {

//   return function () {
//     if (x < 0) {
//       console.log('Rockets already gone, bub!');
//     }
//     if (x > 0) {
//       console.log('T-minus ' + x-- + "...");
//     }
//     else if (x === 0) {
//       console.log('Blast Off!');
//     }
//   }

// };


var countdownGenerator = function (x) {
  return function () {
    var current = x--
    if (current > 0) {
      console.log('T-minus ' + current + "...");
    }
    else if (current === 0) {
      console.log('Blast off!')
    }
    else {
      console.log('Rockets already gone, bub!')
    }
  }
};



var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!