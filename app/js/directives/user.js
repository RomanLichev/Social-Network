app.directive('user', function(){
	return {
		controller: 'UserController',
		restrict: 'E', 
		templateUrl: 'app/templates/user.html',
	};
});