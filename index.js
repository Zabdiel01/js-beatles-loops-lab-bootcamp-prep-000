function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array;
}

function johnLennonFacts(array) {
  var c = 0;
  var newArray = []
  while(c < array.length) {
    newArray = [[c] + "!!!"
    c++
  }
  return newArray
}