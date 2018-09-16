define([],function(){
    var filter = function(collection, keyname) {
        var output = [], 
        keys = [];

        angular.forEach(collection, function(item) {
            var key = item[keyname];	
            if(keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
    filter.$inject = component.controller.injectables;
    return filter;
});