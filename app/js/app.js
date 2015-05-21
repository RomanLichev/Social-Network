'use strict';

var app = angular.module('socialNetworkModule', ['ngResource','ngRoute'])

	.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net')
	.constant('pageSize', 2)
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '/app/templates/home.html'
		});
		$routeProvider.when('/login-register', {
			templateUrl: '/app/templates/login-register.html',
			controller:'LoginController'
		});
		$routeProvider.otherwise(
			{ redirectTo: '/' }
 		);
});