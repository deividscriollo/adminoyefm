    // create the module and name it scotchApp
    var app = angular.module('dcApp', [ 'ngFileUpload',
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
        return $resource("http://192.168.1.31/api-admin-oyefm/public/noticias/:id",{id:"@id"});
    });