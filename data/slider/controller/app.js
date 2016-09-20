var app = angular.module('dcApp');

app.controller('sliderAddCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {

$scope.imgarray=[];
console.log('add slider');

$scope.addimg=function(file,descripcion,titulo){
	$scope.imgarray.push({
			titulo: titulo,
            descripcion: descripcion, 
            file:  file
        });
$scope.picFile=null;
$scope.descripcion=null;
$scope.titulo=null;
//console.log($scope.imgarray);	

}

$scope.delimg=function(index){
$scope.imgarray.splice(index, 1);
//console.log($scope.imgarray);	
}

$scope.uploadgaleria=function(){
	Upload.upload({
      url: 'http://localhost/api-admin-oyefm/public/slider',
      data: {archivos: $scope.imgarray},
    });
    $scope.imgarray=[];
}



}]);