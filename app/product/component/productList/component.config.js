define(['app/product/component/productList/component.define.js'
        ],function(component){
    'use strict';
    
    var config = function($stateProvider, $urlRouterProvider) {
    };

    config.$provide = component.config.providers;

    return config;
});