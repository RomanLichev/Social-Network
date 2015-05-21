app.directive('loginRegister', function(){
	return {
		controller: 'LoginController',
		restrict: 'E', 
		templateUrl: 'app/templates/login-register.html',
	};
});