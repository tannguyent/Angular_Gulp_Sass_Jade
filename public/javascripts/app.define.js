define([],function(){
    var app = {
        name: 'angularModular',
        dependencies: [
            'ui.router',
            'angularModular.home',
            'angularModular.settings',
            'angularModular.user',
            'angularModular.product'
        ],
        config: {
            providers: ['$stateProvider', '$urlRouterProvider']
        },
        controller: {
            name: 'angularModular.appController',
            injectables: []
        }
    };

    return app;
});