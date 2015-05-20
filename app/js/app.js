'use strict';

var app = angular.module('socialNetworkModule', ['ngResource','ngRoute'])

	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '/app/templates/home.html'
		});
		$routeProvider.when('/login-register', {
			templateUrl: '/app/templates/login-register.html',
			controller:'LoginController'
	});
});