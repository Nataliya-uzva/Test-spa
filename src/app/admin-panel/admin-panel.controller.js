(function() {
	'use strict';

	angular
		.module('spa')
		.controller('AdminPanelController', AdminPanelController);

	/** @ngInject */
	function AdminPanelController(Product, NgTableParams, toastr) {
		var vm = this;

		Product.getAll().then( function(response) {
			initTable(response.data);
		});


		function initTable(data) {

			vm.sortFieldsData = {
				company: '',
				about: '',
				firstn: '',
				lastn: '',
				price: ''
			};

			var tableParams = {
				page: 1,
				count: 5,
				sorting: {},
				filter: vm.sortFieldsData
			};

			var tableSettings = {
				counts: [],
				filterDelay: 500,
				data: data
			};

			vm.tableParams = new NgTableParams(tableParams, tableSettings);
		}

		var copiedRow;
		vm.edit = function (row) {
			copiedRow = angular.copy(row);
			row.isEditing = true;
		};
		vm.cancel = function (row) {
			if (!angular.equals(copiedRow, row)) {
				angular.extend(row, copiedRow);
				vm.tableParams.reload();
				toastr.warning('Item wasn\'t changed', 'closing');
			}
			row.isEditing = false;
		};
		vm.save = function (row) {
			row.isEditing = false;
			toastr.success('Item was successfully saved', 'Success');
		};
		vm.del = function (row) {
			var data = vm.tableParams.settings().data,
					len = data.length;
			for (var i = 0; i < len; i++) {
				if (data[i]._id === row._id) {
					vm.tableParams.settings().data.splice(i, 1);
					vm.tableParams.reload();
					break;
				}
			}
		};
	}
})();
