(function() {
	'use strict';

	angular
	.module('spa')
	.service('FakeUser', FakeUserService);

	/** @ngInject */
	function FakeUserService(config) {

		var users = {
			'test': {
				id:			1,
				token: 		'123123123',
				nickname: 'Master',
				role:  		'admin'
			},
			'qwerty': {
				id: 			2,
				token: 		'989898989',
				nickname:  'Moderator',
				role:  		'editor'
			}
		};

		var userToCredentials = {
			'test': {
				name: 	'test',
				pass: 	'test'
			},
			'qwerty': {
				name: 	'qwerty',
				pass: 	'qwerty'
			}
		};

		this.check = function(cred) {
			if (cred.name in userToCredentials &&
				cred.pass === userToCredentials[cred.name].pass) {

				return users[cred.name];
			}
		};

	}
})();
