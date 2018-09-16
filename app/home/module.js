define(['angular',
        'angular-ui-router',
        'app/home/module.define.js',
        'app/home/module.config.js',
        'app/home/controllers/homeController.js',
        ],function(angular, angularRouter, module, moduleConfig, homeController){
    'use strict';

    return angular.module(module.name, module.dependencies)
    .config(moduleConfig)
    .controller(module.homeController.name, homeController);
});