var app = angular.module('dcApp');

app.controller('RadiosCtrl', function($scope,RadiosServices){
   console.log('Add Radio');
$scope.guardarRadio=function(){
	RadiosServices.send($scope.data).$promise.then(function(data){
	console.log(data[0].respuesta);
	        var original = $scope.user;
        $scope.data= angular.copy(original);
        $scope.frmadd.$setPristine();
        $scope.frmadd.$setValidity();
        $scope.frmadd.$setUntouched();
});
}
});
