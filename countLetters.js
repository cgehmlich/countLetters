var inputArray = ["lighthouse in the house"].toString().split(" ").join("").toLowerCase();

function countLetters(inputArray) {
  var result = {};
  for (var i = 0; i < inputArray.length; i++) {
    var letter = inputArray.charAt(i)
    if (result[letter]) {
      result[letter] += 1
    } else result[letter] = 1
  }
  console.log(result);
}
countLetters(inputArray);