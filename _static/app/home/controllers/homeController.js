define(['app/home/module.define.js'],function(module){
    'use strict';
    
    var homeController = function() {
        var self = this;
        self.message = 'Hello World!';
    };
    homeController.$inject = module.homeController.injectables;

    return homeController;
});