define(['app/user/module.define.js', '/app/user/data/users.json'], function(module, data) {
    'use strict';
    var users = [
        { name: 'Schulze', firstName: 'Moritz', lastName: 'Berlin' },
        { name: 'Hanschke', firstName: 'Alexander', lastName: 'Karlsruhe' },
        { name: 'Krion', firstName: 'Adrian', lastName: 'Darmstadt' }
    ];

    var userService = function($q, $timeout) {
        function getAll() {
            var deferred = $q.defer();
            $timeout(function() {
                deferred.resolve(users);
            }, 100);
            return deferred.promise;
        }

        return {
            getAll: getAll
        };
    };
    
    userService.$inject = module.userService.injectables;
    return userService;
});