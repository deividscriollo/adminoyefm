var app = angular.module('dcApp');

app.controller('top10AddCtrl', ['$scope', '$location','Upload', '$timeout','servicioTop10', function ($scope,$location, Upload, $timeout,servicioTop10) {


$scope.imgarray=[];
console.log('add Top10');
$scope.listatop10=[];
$scope.estadosave=true;

$scope.addcancion=function(file,form){
  if ($scope.listatop10.length<15) {
  $scope.listatop10.push({
      artista:$scope.data.artista,
      cancion:$scope.data.cancion,
      url:$scope.data.url,
      img:file
  });
  // $scope.listatop10.push($scope.imgarray);
  }
  if ($scope.listatop10.length==15) {
    $scope.estadosave=false;
  }
   if (form) {
      form.$setPristine();
      form.$setUntouched();
      form.$rollbackViewValue();
    }
    $scope.data = angular.copy($scope.master);
    $scope.picFile=angular.copy($scope.master);
}
$scope.deletecancion=function(obj){
  var index=$scope.listatop10.indexOf(obj);
      $scope.listatop10.splice(index,1); 
}

$scope.delimg=function(index){
$scope.imgarray.splice(index, 1);
//console.log($scope.imgarray); 
}

$scope.guardartop10=function(){
  Upload.upload({
      url: 'http://localhost/api-admin-oyefm/public/addTop10',
      data: {listatop10: $scope.listatop10},
    });
    $scope.imgarray=[];
}

}]);
