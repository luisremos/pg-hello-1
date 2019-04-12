function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	

function businesscard() {

	info =  'Name    : '     + Miłosz     + '\n' + 
			'Surname : '  + Zalewski + '\n' + 
			'E-mail: ' + luisremos9@gmail.com + '\n' + 
			'Group   : '    + 1212     + '\n' + 
			'Field of study : '  + IT  + '\n';

	navigator.notification.alert(info);
	

}
