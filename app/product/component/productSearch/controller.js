define(['app/product/component/productList/component.define.js'],function(component){
    var controller = function($scope, service) {
        $scope.keySearch = "";
        $scope.search = function(){
            console.log('sent event search product:' + $scope.keySearch);
            $scope.$parent.$broadcast('searchProductEvent', $scope.keySearch);
        };
    };
    controller.$inject = component.controller.injectables;
    return controller;
});