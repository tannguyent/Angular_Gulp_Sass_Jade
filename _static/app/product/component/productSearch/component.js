define(['angular',
        'angular-ui-router',
        'app/product/component/productSearch/component.define.js',
        'app/product/component/productSearch/component.config.js',
        'app/product/component/productSearch/component.directive.js',
        'app/product/component/productSearch/controller.js',
        'app/product/component/productSearch/service.js',
        ],function(angular, angularRouter, component, config, directive, controller, service){
    'use strict';

    return angular.module(component.name, component.dependencies)
                  .config(config)
                  .controller(component.controller.name, controller)
                  .directive(component.directive.name, directive);
});