(function() {
	'use strict';

	angular
		.module('spa')
		.config(config);

	/** @ngInject */
	function config($logProvider, toastrConfig) {
		// Enable log
		// $logProvider.debugEnabled(true);

		// Set options third-party lib
		toastrConfig.allowHtml = true;
		toastrConfig.timeOut = 1500;
		toastrConfig.positionClass = 'toast-top-right';
		toastrConfig.preventDuplicates = false;
		toastrConfig.progressBar = true;
	}

})();
