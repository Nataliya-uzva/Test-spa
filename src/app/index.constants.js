/* global malarkey:false, moment:false */
(function() {
	'use strict';

	angular
		.module('spa')
		.constant('config', {
			FAKE_API: './app/resources/dummy.json',
			FAKE_API_DATA: './app/FAKE_SERVER/goods.json'
		})
		.constant('USER_ROLES', {
			all: 			'*',
			admin: 		'admin',
			editor: 	'editor',
			guest: 		'guest'
		})
		.constant('AUTH_EVENTS', {
			loginSuccess:		'auth-login-success',
			loginFailed:		'auth-login-failed',
			logoutSuccess:	'auth-logout-success',
			sessionTimeout:	'auth-session-timeout',
			notLoggedIn:		'auth-not-logged-in',
			notAuthorized:	'auth-not-authorized'
		});

})();
