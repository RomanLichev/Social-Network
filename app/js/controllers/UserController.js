'use strict';

app.controller('UserController',
	function ($scope, authService) {    
    	$scope.user = function() {
    		authService.user(userData);
    	}
  	}
);  
  
    
    