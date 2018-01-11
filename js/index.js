//https://www.tutorialspoint.com/cordova/cordova_inappbrowser.htm
function test(){
	var url='https://cordova.apache.org';
	var number = urlInput.value;
	if(number == 1) url ='http://www.kea.dk';
	if(number == 1) url ='https://www.dr.dk/';
	openBrowser(url);
}

function openBrowser(url) {
   //var url = 'https://cordova.apache.org';
   var target = '_blank';
   var options = "location = yes"
   var ref = cordova.InAppBrowser.open(url, target, options);
   
   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loadloaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

   function loadstartCallback(event) {
      console.log('Loading started: '  + event.url)
	  //document.getElementById("log").innerHTML = 'Loading started: '  + event.url;
   }

   function loadstopCallback(event) {
      console.log('Loading finished: ' + event.url)
	 //document.getElementById("log").innerHTML = 'Loading finished: ' + event.url;
   }

   function loaderrorCallback(error) {
      console.log('Loading error: ' + error.message)
	  //document.getElementById("log").innerHTML = 'Loading error: ' + error.message;
   }

   function exitCallback() {
      console.log('Browser is closed...')
	  //document.getElementById("log").innerHTML ='Browser is closed...';
   }
}



