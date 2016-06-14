(function() {
	'use strict';

	angular
		.module('spa')
		.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController($scope, $timeout, $location, API, Auth, toastr) {
		var vm = this;

		Auth.checkUser();

		vm.credentials = {
			name: '',
			pass: ''
		};

		function flushCredentials() {
			vm.credentials = {
				name: '',
				pass: ''
			};
		}

		vm.sendCredentials = function ($event) {
			if ($event && typeof $event.preventDefault == 'function') {
				$event.preventDefault();
			}

			API
				.loginAttempt(vm.credentials)
				.then(success)
				.catch(error);
		};

		function success(data) {
			Auth.setUser(data, vm.credentials.remember);
			toastr.success(data.nickname, 'WELCOME');
		}
		function error() {
			toastr.error('Seems validation wasn\'t OK, try again', 'ERROR');
		}

	}
})();
