function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
    //console.log(getting);
  var color = "blue";
  if (item.color) {
    color = item.color;
  }
  document.body.style.border = "10px solid " + color;
}
//testing this out 

var testColor = browser.storage.sync.get("green");
testColor.then(onTest, onError);
function onTest(item) {
    //console.log(getting);
  var color = "red";
  if (item == true) {
    color = "green";
  }
  document.body.style.border = "10px solid " + color;
}

//var getting = browser.storage.sync.get("color");
//getting.then(onGot, onError);