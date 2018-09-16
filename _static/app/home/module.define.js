define([],function(){
    'use strict';

    var module = {
        name: 'angularModular.home',
        dependencies: ['ui.router'],
        config: {
            providers: ['$stateProvider', '$urlRouterProvider']
        },
        homeController: {
            name: 'home.homeController',
            injectables: []
        }
    };

  return module;
});