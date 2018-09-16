define(['domReady!', 'angular', '/assets/javascripts/app.js', 'angular-ui-router'], function(domReady, angular, app){
    'use strict';
    angular.bootstrap(domReady, [app.name]);
});