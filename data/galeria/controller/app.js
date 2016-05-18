var app = angular.module('dcApp');

app.controller('galeriaAddCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {

$scope.imgarray=[];
console.log('add galeria');

$scope.addimg=function(file,descripcion){
	$scope.imgarray.push({
            descripcion: descripcion, 
            file:  file
        });
console.log($scope.imgarray);	
}

$scope.uploadgaleria=function(){
	Upload.upload({
      url: 'http://192.168.1.31/api-admin-oyefm/public/galeria',
      data: {archivos: $scope.imgarray},
    });
}


}]);