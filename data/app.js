    // create the module and name it scotchApp
    var app = angular.module('dcApp', ['ui.mask', 'ngRoute', 'ngAnimate', 'route-segment', 'view-segment', 'ngMaterial', 'ngWig']);

    var API_URL = 'http://192.168.1.31/api_ex/public/api/v1/';

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

    app.factory('service', function($http) {
        var service = {};
        service.shownoticicas = function() {
            return $http({
                url: API_URL + "noticias",
                method: 'GET'
            })
        }

        service.guardar = function($http,datos) {
            return $http({
                method: 'POST',
                url: API_URL + "noticias",
                data: datos,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        }

        return service;
    });