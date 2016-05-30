var app = angular.module('dcApp');

app.controller('loginController', function($scope,$localStorage,login){
   console.log('hola Login');


 $scope.login = function () {
 	$scope.data={email:$('#cedula').val(),password:$scope.pass};
               console.log($scope.data);
login.ingresar($scope.data).$promise.then(function(data){
console.log(data.token);
$localStorage.token=data.token;
}, function(err){
console.log(err.data.error);
});


           };



});