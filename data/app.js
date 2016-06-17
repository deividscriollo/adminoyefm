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

return $resource('http://apiadmin.nextbook.ec/public/noticias', {}, {
    get: {
        method: 'GET',
        isArray: false,
       params: {token: $localStorage.token}
    }
});

    });

    app.factory('Programas', function($resource) {
return $resource('http://apiadmin.nextbook.ec/public/programas', {}, {
    query: {
        method: 'GET',
        isArray: true,
        params: {token: $localStorage.token}
    }
    });
    });

    app.factory('Videosemanal', function($resource) {
        //return $resource("http://apiadmin.nextbook.ec/public/programas/:id",{id:"@id"});
        return $resource("http://apiadmin.nextbook.ec/public/videosemanal/:id",{id:"@id"});
    });

    app.factory('login', function($resource) {
        // return $resource("http://apiadmin.nextbook.ec/public/login/:id",{id:"@id"});
return $resource('http://apiadmin.nextbook.ec/public/login', {}, {
    ingresar: {
        method: 'POST',
        params: {token: $localStorage.token}
    }
});

    });

     app.factory('Delnews', ['$resource', function ($resource) {
        return $resource('http://apiadmin.nextbook.ec/public/delnoticia/:id/:categoria', {id: '@id',categoria: '@categoria'});
    }]);


     