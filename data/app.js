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

return $resource('http://servicios.oyefm.com/public/noticias', {}, {
    get: {
        method: 'GET',
        isArray: false,
       params: {token: $localStorage.token}
    }
});

    });

app.factory('RadiosServices', function($resource,$localStorage) {
return $resource('http://servicios.oyefm.com/public/AddRadio', {}, {
    send: {
        method: 'POST',
        isArray: true,
        //params: {token: $localStorage.token}
    }
    });
    });

    app.factory('Programas', function($resource,$localStorage) {
return $resource('http://servicios.oyefm.com/public/programas', {}, {
    query: {
        method: 'GET',
        isArray: true,
        params: {token: $localStorage.token}
    }
    });
    });

     app.factory('servicioTop10', function($resource) {
        return $resource('http://servicios.oyefm.com/public/addTop10', {}, {
            set: {
                method: 'POST'
            }
            });
    });

    app.factory('Videosemanal', function($resource) {
        //return $resource("http://servicios.oyefm.com/public/programas/:id",{id:"@id"});
        return $resource("http://servicios.oyefm.com/public/videosemanal/:id",{id:"@id"});
    });

    app.factory('login', function($resource) {
        // return $resource("http://servicios.oyefm.com/public/login/:id",{id:"@id"});
return $resource('http://servicios.oyefm.com/public/login', {}, {
    ingresar: {
        method: 'POST',
        params: {token: $localStorage.token}
    }
});

    });

     app.factory('Delnews', ['$resource', function ($resource) {
        return $resource('http://servicios.oyefm.com/public/delnoticia/:id/:categoria', {id: '@id',categoria: '@categoria'});
    }]);


     