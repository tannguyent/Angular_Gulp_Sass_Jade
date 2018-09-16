define(['app/product/component/productSearch/component.define.js'
        ],function(component){
    'use strict';
    
    var directive = function() {
        return {
            scope:  {},
            templateUrl: 'app/product/component/productSearch/view.html',
            controller: component.controller.name,
            link: function(scope, element, attrs) {}
        };
    };

    directive.$inject = component.directive.injectables;
    return directive;
});