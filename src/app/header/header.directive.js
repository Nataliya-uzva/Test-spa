(function() {
	'use strict';

	angular
		.module('spa')
		.directive('headerP', HeaderDirective);

	/** @ngInject */
	function HeaderDirective() {
			return {
				restrict: 'E',
				templateUrl: './app/header/header.html',
				controller: function($scope, Auth) {

					$scope.username = '';

					$scope.$on('user-set', function(event, user) {
						$scope.username = user.nickname;
					});

					$scope.$on('user-delete', function() {
						$scope.username = null;
					});

					$scope.logout = function() {
						var sure = confirm('Are U sure?');
						if (sure)
							Auth.deleteUser();
					};
				}
			};
	}

})();