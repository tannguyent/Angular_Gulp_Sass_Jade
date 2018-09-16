define([],function(){
    'use strict';
    var module = {
        name: 'angularModular.settings',
        dependencies: ['ui.router'],
        config: {
            providers: ['$stateProvider', '$urlRouterProvider']
        },
        homeController: {
            name: 'settings.homeController',
            injectables: []
        }
    };

  return module;
});