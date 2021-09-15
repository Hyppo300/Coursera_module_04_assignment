 
(function () {

var names = ["Yaakov", "Joe", "James", "Henry", "Paul", "Foul", "Lewis", "Jane", "Komin", "Jang"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    bye(names[i]);
  }
  else {
    hello(names[i]);
  }
}

})();