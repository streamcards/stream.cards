(function($) {
	window.addEventListener('polymer-ready', function(e) {
		var services  = ['Dropbox','Google Drive','Amazon','Facebook','Twitter']
		var placeholder = document.getElementById('service_placeholder');
		placeholder.innerHTML = services[0];
		setInterval(function() {
			var rand = Math.floor((Math.random() * parseInt(services.length-1)) + 1);
			placeholder.innerHTML = services[rand];
		},3500);
	});
})(jQuery);