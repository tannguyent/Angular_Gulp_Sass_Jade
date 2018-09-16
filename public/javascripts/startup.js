/* global document */
require.config({
    baseUrl: '_static',
    paths: {
        'jQuery': '/assets/component/jquery/jquery',
        'angular': '/assets/component/angular/angular',
        'angular-ui-router': '/assets/component/angular-ui-router/angular-ui-router'
    },
    shim: {
        'angular': { exports: 'angular', deps: ['jQuery']},
        'jQuery': { exports: '$' },
        'angular-ui-router': ['angular']
    }
});

require(['/assets/javascripts/app.js'], function(app) {
    'use strict';
    app.init();
});
