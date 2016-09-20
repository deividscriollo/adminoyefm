var app = angular.module('dcApp');

app.controller('clientesAddCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {

console.log('add cliente');

$scope.addcliente = function(file) {

file.upload = Upload.upload({
      url: 'http://localhost/api-admin-oyefm/public/clientes',
      data: {datos: $scope.data, file: file},
    });
    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
    });
}

}]);
