    // create the module and name it scotchApp
    var app = angular.module('dcApp', [ 'ngStorage',
                                        'ngSanitize',
                                        'videosharing-embed',
                                        'ngFileUpload',
                                        'ngResource',
                                        'ui.mask',
                                        'ngRoute', 
                                        'ngAnimate', 
                                        'route-segment', 
                                        'view-segment', 
                                        'ngMaterial', 
                                        'ngWig'
                                        ]);

    //var API_URL = 'http://localhost/api/public/';

    app.factory('service', function($http) {
        var service = {
            async: function() {
                var promise = $http({
                    url: "app.php",
                    method: 'POST',
                    data: {
                        methods: 'info'
                    }
                }).then(function(response) {
                    return response.data;
                });
                return promise;
            },
            general: function(typeservices) {
                var promise = $http.post("app.php", {
                    methods: typeservices
                }).then(function(response) {
                    return response.data;
                });
                return promise;
            },
            general: function(typeservices, url, data) {
                var promise = $http.post(url, {
                    methods: typeservices,
                    data
                }).then(function(response) {
                    return response.data;
                });
                return promise;
            }
        };
        return service;
    });

    app.factory('Noticias', function($resource,$localStorage) {

// var Noticias= $resource("http://apiadmin.nextbook.ec/public/noticias/:id",{id:"@id"});
//         return Noticias;

return $resource('http://192.168.1.36/api-admin-oyefm/public/noticias', {}, {
    get: {
        method: 'GET',
        isArray: false,
       params: {token: $localStorage.token}
    }
});

    });

    app.factory('Programas', function($resource) {
        //return $resource("http://apiadmin.nextbook.ec/public/programas/:id",{id:"@id"});
        //return $resource("http://apiadmin.nextbook.ec/public/programas/:id",{id:"@id"});
        // return $resource("http://192.168.1.36/api-admin-oyefm/public/programas/:id",{id:"@id"});

return $resource('http://apiadmin.nextbook.ec/public/programas', {}, {
    query: {
        method: 'GET',
        isArray: true,
        headers: { 'api-key': '$2y$10$k.ol6RKAs3d.YEk/0lhdzOMEagC2jcS9l13iR9GU.swsk7X6NBHIm' }
    }
});

    });

    app.factory('Videosemanal', function($resource) {
        //return $resource("http://apiadmin.nextbook.ec/public/programas/:id",{id:"@id"});
        return $resource("http://apiadmin.nextbook.ec/public/videosemanal/:id",{id:"@id"});
    });

    app.factory('login', function($resource) {
        // return $resource("http://apiadmin.nextbook.ec/public/login/:id",{id:"@id"});
return $resource('http://192.168.1.36/api-admin-oyefm/public/login', {}, {
    ingresar: {
        method: 'POST',
        headers: {
        'api-key': '$2y$10$k.ol6RKAs3d.YEk/0lhdzOMEagC2jcS9l13iR9GU.swsk7X6NBHIm' }
    }
});


    });

     app.factory('Delnews', ['$resource', function ($resource) {
        return $resource('http://apiadmin.nextbook.ec/public/delnoticia/:id/:categoria', {id: '@id',categoria: '@categoria'});
}]);