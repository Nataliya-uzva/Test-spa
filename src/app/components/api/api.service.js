(function() {
	'use strict';

	angular
		.module('spa')
		.service('API', APIService);

	/** @ngInject */
	function APIService($http, $q, config, $timeout, FakeUser) {



		this.loginAttempt = function (credentials) {
			var defer = $q.defer();
			$timeout(function() {
				var user = FakeUser.check(credentials);
				if (user) {
					defer.resolve(user);
				} else {
					defer.reject(user);
				}
			}, 300);

			return defer.promise;
		};


	}
})();
