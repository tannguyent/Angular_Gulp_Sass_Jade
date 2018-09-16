define(['angular', 
        '/assets/javascripts/app.define.js', 
        '/assets/javascripts/app.config.js', 
        '/assets/javascripts/app.controller.js', 
        'app/home/module.js', 
        'app/settings/module.js',
        'app/user/module.js',
        'app/product/module.js',
        ], function(angular, appDefine, appconfig, controller) {
        
        'use strict';
        var app = angular.module(appDefine.name, appDefine.dependencies)
                        .config(appconfig)
                        .controller(appDefine.controller.name, controller);

        app.init = function () {
                angular.bootstrap(document, [appDefine.name]);
        };

        return app;
});