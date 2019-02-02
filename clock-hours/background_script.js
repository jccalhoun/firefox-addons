//based on small clock https://github.com/davidillsley/small-clock
//color update code from https://github.com/mdn/webextensions-examples/tree/master/theme-integrated-sidebar
var textColor;
function setTextColor(theme) {
  // colors.frame and colors.accentcolor are aliases
  if (theme.colors && theme.colors.toolbar_text) {
    textColor = theme.colors.toolbar_text;
  } else {
    textColor = "white";
  }
    updateClock();
}

// Set the element style when the extension page loads
async function setInitialStyle() {
  const theme = await browser.theme.getCurrent();
  setTextColor(theme);
}
setInitialStyle();

// Watch for theme updates
browser.theme.onUpdated.addListener(async ({ theme, windowId }) => {
  const sidebarWindow = await browser.windows.getCurrent();
  /*
    Only update theme if it applies to the window the sidebar is in.
    If a windowId is passed during an update, it means that the theme is applied to that specific window.
    Otherwise, the theme is applied globally to all windows.
  */
  if (!windowId || windowId == sidebarWindow.id) {
    setTextColor(theme);
  }
});

function updateClock() {
		var date = new Date();
		var hours = date.getHours();
     if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        };
       

  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  context.fillStyle = textColor;
  context.font = "bold 100px sans-serif";
  context.fillText(hours +":", 0, 100);
  

  var imageData = context.getImageData(0, 0, 128, 128);

  browser.browserAction.setIcon({imageData: imageData});
  browser.browserAction.setTitle({title: date.toString()});
setTimeout(updateClock, (60-date.getSeconds())*1000);
 
}

		updateClock();
	