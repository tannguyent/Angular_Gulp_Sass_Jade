define(['angular',
        'angular-ui-router',
        'app/product/component/productList/component.define.js',
        'app/product/component/productList/component.config.js',
        'app/product/component/productList/component.directive.js',
        'app/product/component/productList/controller.js',
        'app/product/component/productList/service.js',
        ],function(angular, angularRouter, component, config, directive, controller, service){
    'use strict';

    return angular.module(component.name, component.dependencies)
                  .config(config)
                  .service(component.service.name, service)
                  .controller(component.controller.name, controller)
                  .directive(component.directive.name, directive);
});