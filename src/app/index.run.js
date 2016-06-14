(function() {
  'use strict';

  angular
    .module('spa')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $location, Auth, AUTH_EVENTS, USER_ROLES) {
    $rootScope.isAuthorized = Auth.isAuthorized;
    $rootScope.USER_ROLES = USER_ROLES;

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      var roles = (next && next.$$route && next.$$route.data && next.$$route.data.roles) ? next.$$route.data.roles : [];

      if (!Auth.checkPermission(roles)) {
        $location.path('/login');
      }

   });

  }

})();