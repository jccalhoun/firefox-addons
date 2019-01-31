//based on small clock https://github.com/davidillsley/small-clock
function updateClock() {
		var date = new Date();
		var hours = date.getHours();
     if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        };
        //if(hours == 0){
       //     hours = 12;
       // } else {
       //     hours = hours % 12;
       // }
        
  //var minutes=  date.getMinutes();

  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  context.fillStyle = "#FFFFFF";
  context.font = "bold 100px sans-serif";
  context.fillText(hours +":", 0, 100);
  //context.font = "62px sans-serif";
  //context.fillText((minutes<10? "0": "") + minutes, 60, 110);

  var imageData = context.getImageData(0, 0, 128, 128);

  browser.browserAction.setIcon({imageData: imageData});
  browser.browserAction.setTitle({title: date.toString()});
setTimeout(updateClock, (60-date.getSeconds())*1000);
  //setTimeout(update, (60-date.getSeconds())*1000);
}
//I think that it doesn't update because it should be setTimeout(updateClock	
		updateClock();
	