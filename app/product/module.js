define(['angular',
        'angular-ui-router',
        'app/product/module.define.js',
        'app/product/module.config.js',
        'app/product/component/productList/component.js',
        'app/product/component/productSearch/component.js',
        ],function(angular, angularRouter, module, moduleConfig){
    'use strict';

    return angular.module(module.name, module.dependencies)
                  .config(moduleConfig);
});