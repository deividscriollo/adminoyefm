    // create the module and name it scotchApp
    var app = angular.module('dcApp', [ 'ngSanitize',
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

    app.factory('Noticias', function($resource) {

var Noticias= $resource("http://apiadmin.nextbook.ec/public/noticias/:id",{id:"@id"});
        return Noticias;
    });

    app.factory('Programas', function($resource) {
        //return $resource("http://apiadmin.nextbook.ec/public/programas/:id",{id:"@id"});
        return $resource("http://apiadmin.nextbook.ec/public/programas/:id",{id:"@id"});
    });

    app.factory('Videosemanal', function($resource) {
        //return $resource("http://apiadmin.nextbook.ec/public/programas/:id",{id:"@id"});
        return $resource("http://apiadmin.nextbook.ec/public/videosemanal/:id",{id:"@id"});
    });

     app.factory('Delnews', ['$resource', function ($resource) {
        return $resource('http://apiadmin.nextbook.ec/public/delnoticia/:id/:categoria', {id: '@id',categoria: '@categoria'});
}]);