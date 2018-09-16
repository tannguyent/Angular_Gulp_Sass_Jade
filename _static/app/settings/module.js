define(['angular',
        'angular-ui-router',
        'app/settings/module.define.js',
        'app/settings/module.config.js',
        'app/settings/controllers/homeController.js'
        ],function(angular, angularRouter, module, moduleConfig, homeController){
    'use strict';

    return angular.module(module.name, module.dependencies)
    .config(moduleConfig)
    .controller(module.homeController.name, homeController);
});