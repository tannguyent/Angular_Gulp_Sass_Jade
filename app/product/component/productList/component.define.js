define([],function(){
    'use strict';
    var component = {
        name: 'angularModular.componentProductList',
        dependencies: ['ui.router'],
        directive:{
            name: 'productList',
            injectables: []
        },
        controller: {
            name: 'productList.controller',
            injectables: ['$scope', 'productList.service']
        },
        service: {
            name: 'productList.service',
            injectables: ['$q', '$timeout']
        },
        config: {
            providers: ['$stateProvider', '$urlRouterProvider']
        }
    };

  return component;
});