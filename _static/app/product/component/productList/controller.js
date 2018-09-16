define(['app/product/component/productList/component.define.js'],function(component){
    var controller = function($scope, service) {
        service.getAll().then(function(products) {
            $scope.products = products;
        });

        $scope.$on('searchProductEvent', function (event, data) {
            console.log('received event search product:' + data);
            service.search(data).then(function(products) {
                $scope.products = products;
            });
        });

    };
    controller.$inject = component.controller.injectables;
    return controller;
});