(function() {
	'use strict';

	angular
		.module('spa')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController(Auth, Product, toastr) {
		var vm = this;
		vm.items = [];

		Product.getAll().then( function(response) {
			vm.items = response.data;
		});

		vm.buyGoods = function () {
			toastr.error('Not so fast!!!');
		};
	}

})();
