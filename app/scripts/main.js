(function(angular) {
	'use strict';

	var app = angular.module('streamcards', ['ngRoute']);

	app.config(function($routeProvider) {

		$routeProvider.when('/', {
			templateUrl: 'views/index.html'
		})
		.otherwise('/');
	});

})(window.angular);