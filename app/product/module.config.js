define(['app/product/module.define.js'
        ],function(module){
    'use strict';
    
    var moduleConfig = function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state( 'app.product-index', {
                url: '/product',
                templateUrl: '/app/product/pages/index/index.html',
        });
    };
    moduleConfig.$provide = module.config.providers;

    return moduleConfig;
});