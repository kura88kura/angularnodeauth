angular.module('jwtoneApp').config(function($stateProvider) {
	
	$stateProvider
	
	.state('main', {
		url: '/',
		templateUrl: '/views/main.html'
	})
	
	.state('register', {
		url: '/register',
		templateUrl: '/views/register.html'
	});
	
})