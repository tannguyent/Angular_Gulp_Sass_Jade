define(['app/home/module.define.js'],function(module){
    'use strict';
    var moduleConfig = function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state( 'app.home', {
                url: '/home',
                templateUrl: '/app/home/views/index.html',
                controller: module.homeController.name + ' as home'
        });
    };
    moduleConfig.$provide = module.config.providers;

    return moduleConfig;
});