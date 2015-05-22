app.directive('loginRegister', function(){
	return {
		controller: 'LoginRegisterController',
		restrict: 'E', 
		templateUrl: 'app/templates/login-register.html',
	};
});