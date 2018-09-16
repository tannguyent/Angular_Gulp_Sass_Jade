define(['app/product/component/ProductList/component.define.js'], function(component) {
    'use strict';
    var products = [
        { order: 1, name: 'Schulze', description: 'Moritz'},
        { order: 2, name: 'Hanschke', description: 'Alexander' },
        { order: 3, name: 'Krion', description: 'Adrian'}
    ];

    var service = function($q, $timeout) {
        function getAll() {
            var deferred = $q.defer();
            $timeout(function() {
                deferred.resolve(products);
            }, 100);
            return deferred.promise;
        }

        function search(keysearch) {
            var deferred = $q.defer();
            $timeout(function() {
                var productFilter = products.filter(function (item) {
                    return item.name.indexOf(keysearch) !== -1;
                });
                deferred.resolve(productFilter);
            }, 100);
            return deferred.promise;
        }

        return {
            getAll: getAll,
            search: search,
        };
    };
    
    service.$inject = component.service.injectables;
    return service;
});