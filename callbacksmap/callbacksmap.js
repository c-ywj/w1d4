var words = ["ground", "control", "to", "major", "tom"];

function map(arr, action) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    result.push(action(arr[i]));
  }
  return result;
}










map(words, function(word) {
  return word.length;
});


// [6, 7, 2, 5, 3]    <--- expected output;


console.log(map(words, function(word) {
  return word.length;
}));