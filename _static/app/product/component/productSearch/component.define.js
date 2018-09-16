define([],function(){
    'use strict';
    var component = {
        name: 'angularModular.componentProductSearch',
        dependencies: ['ui.router'],
        directive:{
            name: 'productSearch',
            injectables: []
        },
        controller: {
            name: 'productSearch.controller',
            injectables: ['$scope', 'productSearch.service']
        },
        config: {
            providers: ['$stateProvider', '$urlRouterProvider']
        }
    };

  return component;
});