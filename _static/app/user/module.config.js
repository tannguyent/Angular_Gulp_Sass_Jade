define(['app/user/module.define.js'
        ],function(module){
    'use strict';
    
    var moduleConfig = function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state( 'app.user-index', {
                url: '/user',
                templateUrl: '/app/user/views/index.html',
                controller: module.homeController.name 
        });
    };
    moduleConfig.$provide = module.config.providers;

    return moduleConfig;
});