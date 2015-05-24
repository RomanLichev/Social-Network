'use strict';

var app = angular.module('socialNetworkModule', ['ngResource','ngRoute']);

	app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
	app.constant('pageSize', 5);

	app.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '/app/templates/home.html',
		});
		$routeProvider.when('/login-register', {
			templateUrl: '/app/templates/login-register.html',
			controller:'LoginRegisterController'
		});
		$routeProvider.when('/user', {
			templateUrl: '/app/templates/user.html',
			controller:'LoginRegisterController'
		});
		$routeProvider.otherwise(
			{ redirectTo: '/' }
 		);
 	});

 	app.run(function ($rootScope, $location, authService) {
  		$rootScope.$on('$locationChangeStart', function (event) {
    	if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn())
    		{
      			$location.path("/");
    		}
    	});
	});
