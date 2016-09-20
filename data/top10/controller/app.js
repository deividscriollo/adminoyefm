var app = angular.module('dcApp');

app.controller('top10AddCtrl', ['$scope', '$location','Upload', '$timeout','servicioTop10', function ($scope,$location, Upload, $timeout,servicioTop10) {

console.log('add Top10');
$scope.listatop10=[];
$scope.estadosave=true;

$scope.addcancion=function(){
  if ($scope.listatop10.length<10) {
  $scope.listatop10.push({
      // nro:$scope.nro,
      titulo:$scope.data.titulo,
      genero:$scope.data.genero,
      artista:$scope.data.artista,
      cancion:$scope.data.cancion,
      url:$scope.data.url,
      otros:$scope.data.otros
  });
  }
  if ($scope.listatop10.length==10) {
    $scope.estadosave=false;
  }
}
$scope.deletecancion=function(obj){
  var index=$scope.listatop10.indexOf(obj);
      $scope.listatop10.splice(index,1); 
}

$scope.guardartop10=function(form){
  servicioTop10.set({top:$scope.listatop10}).$promise.then(function(d){
    if (d.respuesta) {
     $scope.listatop10=[];
    }
  });
 if (form) {
      form.$setPristine();
      form.$setUntouched();
      form.$rollbackViewValue();
    }
    $scope.data = angular.copy($scope.master);
}

}]);

// app.controller('ProgramasUpdateCtrl', function($scope,Programas){
//    console.log('hola programa update');
//     $scope.programas=[];
//     $scope.getprogramas=function(){
//     Programas.query().$promise.then(function(data){
//     $scope.programas=data;
//      //console.log($scope.programas[1]);
// }, function(err){

// });
// }
// $scope.getprogramas();


// });
