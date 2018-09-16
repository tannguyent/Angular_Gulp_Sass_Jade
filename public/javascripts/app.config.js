define(['/assets/javascripts/app.define.js'
        ],function(app){
    'use strict';
    
    var appConfig = function($locationProvider, $stateProvider, $urlRouterProvider) {
        // the overall default route for the app. If no matching route is found, then go here
        $urlRouterProvider.otherwise('/app/home');

        $stateProvider
            .state('app', {
                abstract: true,
                url: '/app',
                views: {
                    'container': {
                        templateUrl: 'app.html'
                    }
                },
                controller: app.controller.name 
        });
    };
    appConfig.$provide = app.config.providers;

    return appConfig;
});