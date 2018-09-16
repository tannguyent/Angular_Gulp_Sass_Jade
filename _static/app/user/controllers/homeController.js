define(['app/user/module.define.js'],function(module){
    var homeController = function($scope, userService) {
        userService.getAll().then(function(users) {
            $scope.users = users;
        });
    };
    homeController.$inject = module.homeController.injectables;
    
    return homeController;
});