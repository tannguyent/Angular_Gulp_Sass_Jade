define([],function(){
    'use strict';
    var module = {
        name: 'angularModular.user',
        dependencies: ['ui.router'],
        config: {
            providers: ['$stateProvider', '$urlRouterProvider']
        },
        homeController: {
            name: 'user.homeController',
            injectables: ['$scope', 'user.userService']
        },
        userService: {
            name: 'user.userService',
            injectables: ['$q', '$timeout']
        }
    };

  return module;
});