define(['angular',
        'angular-ui-router',
        'app/user/module.define.js',
        'app/user/module.config.js',
        'app/user/controllers/homeController.js',
        'app/user/services/userService.js',
        ],function(angular, angularRouter, module, moduleConfig, homeController, userService){
    'use strict';

    return angular.module(module.name, module.dependencies)
                    .config(moduleConfig)
                    .service(module.userService.name, userService)
                    .controller(module.homeController.name, homeController);
});