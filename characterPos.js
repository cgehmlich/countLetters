var inputArray = ["lighthouse in the house"].toString().split(" ").join("").toLowerCase();

function countLetters(inputArray) {
  var result = {};
  for (var i = 0; i < inputArray.length; i++) {
    var x = inputArray.charAt(i);
    if (result[x]) {
      result[x].push(i)
    } else {
      result[x] = [i]
    }
  }
  console.log(result);
}
countLetters(inputArray);