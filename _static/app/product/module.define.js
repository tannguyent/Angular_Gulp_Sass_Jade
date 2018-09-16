define([],function(){
    'use strict';
    var module = {
        name: 'angularModular.product',
        dependencies: ['ui.router',
                       'angularModular.componentProductList',
                       'angularModular.componentProductSearch'],
        config: {
            providers: ['$stateProvider', '$urlRouterProvider']
        }
    };

  return module;
});