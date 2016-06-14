(function() {
	'use strict';

	angular
		.module('spa')
		.service('Product', ProductService);
			/** @ngInject */
		function ProductService($http, config) {
			this.getAll = function(){

				var dataPromise = $http({
					method: 	'GET',
					url: 		config.FAKE_API_DATA
				});

				return dataPromise;

			};
		}

})();
