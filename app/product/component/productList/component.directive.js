define(['app/product/component/productList/component.define.js'
        ],function(component){
    'use strict';
    
    var directive = function() {
        return {
            scope:  {},
            templateUrl: 'app/product/component/productList/view.html',
            controller: component.controller.name
        };
    };

    directive.$inject = component.directive.injectables;
    return directive;
});