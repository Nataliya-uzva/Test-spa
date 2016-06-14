(function() {
	'use strict';

	angular
		.module('spa')
		.config(routeConfig);

	function routeConfig($routeProvider, USER_ROLES) {
		$routeProvider
			.when('/', {
				templateUrl: 	'app/main/main.html',
				controller: 		'MainController',
				controllerAs: 	'main',
				data: {
					roles: [USER_ROLES.admin, USER_ROLES.editor]
				}
			})
			.when('/admin', {
				templateUrl: 	'app/admin-panel/admin-panel.html',
				controller: 		'AdminPanelController',
				controllerAs: 	'admin',
				data: {
					roles: [USER_ROLES.admin]
				}
			})
			.when('/login', {
				templateUrl: 	'app/login/login.html',
				controller: 		'LoginController',
				controllerAs: 	'login',
				data: {
					roles: [USER_ROLES.all]
				}
			})
			.when('/guest', {
				template: 	'<h1>Не повезло :)</h1>',
				data: {
					roles: [USER_ROLES.all]
				}
			})
			.otherwise({
				redirectTo: '/'
			});
	}

})();
