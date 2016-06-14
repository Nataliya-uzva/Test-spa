(function() {
	'use strict';

	angular
		.module('spa')
		.service('Auth', AuthService);

	/** @ngInject */
	function AuthService(API, USER_ROLES, $q, $rootScope, $location) {

		var user = {};

		this.isLoggedIn = function() {
			return !!user.id;
		};

		this.isAuthorized = function(roles) {
			return !!(roles.indexOf(user.role) !== -1);
		};

		this.getUser = function() {
			return user;
		};

		this.setUser = function(userData, remember) {
			if (userData && userData.id) {
				user = userData;

				if (remember) {
					$rootScope.$broadcast('user-set', user);
					localStorage.user = angular.toJson(user);
				}

				switch(user.role) {
					case USER_ROLES.admin:
						$location.path( "/admin" );
						break;
					case USER_ROLES.editor:
						$location.path( "/" );
						break;
					default:
						alert('Bad luck(((');
						$location.path( "/guest" );
						break;
				}
			}
		};

		this.deleteUser = function() {
			user = {};
			delete localStorage.user;

			$rootScope.$broadcast('user-delete', user);
			$location.path( "/login" );
		};

		this.checkUser = function() {
			var tmp;
			if (localStorage.user && localStorage.user.length) {
				try {
					tmp = angular.fromJson(localStorage.user);
					this.setUser(tmp);
				} catch (error) {
					console.error(JSON.stringify(error));
				}
			}
		};

		this.checkPermission = function(rolesArr) {
			return (user.id && (rolesArr.indexOf('*') !== -1 || rolesArr.indexOf(user.role) !== -1));
		};

	}
})();
