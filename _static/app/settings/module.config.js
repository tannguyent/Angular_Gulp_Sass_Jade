define(['app/settings/module.define.js'
        ],function(module){
    'use strict';
    
    var moduleConfig = function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state( 'app.settings', {
                url: '/settings',
                templateUrl: '/app/settings/views/index.html',
                controller: module.homeController.name + ' as settings'
        });
    };
    moduleConfig.$provide = module.config.providers;

    return moduleConfig;
});