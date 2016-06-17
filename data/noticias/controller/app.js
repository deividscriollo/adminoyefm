var app = angular.module('dcApp');

app.controller('NoticiasAddCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {

console.log('add programa');

    $scope.uploadPic = function(file) {
    $scope.albumNameArray = [];
       angular.forEach($scope.folder,function(key,value){
            if(key)
                $scope.albumNameArray.push(value)
        });
        //Programas.save($scope.data);
//console.log($scope.data);

file.upload = Upload.upload({
      url: 'http://apiadmin.nextbook.ec/public/noticias',
      data: {datos: $scope.data, file: file},
    });
    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
    }, function (response) {
      if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
}
$scope.preview=function(){
}

}]);

var app = angular.module('dcApp').controller('NoticiasPreviewCtrl', function($scope){
   console.log('hola noticias Preview');
   $('[data-toggle="tooltip"]').tooltip();
});
var app = angular.module('dcApp').controller('NoticiasUpdateCtrl', function($scope,Noticias,Delnews){
console.log('hola noticias update');
$scope.news=[];
$scope.deportes=[];
$scope.farandula=[];
$scope.curiosidades=[];

$scope.getnoticias=function(){
Noticias.get('noticias').$promise.then(function(data){
//console.log(data['noticias']);
$scope.news=data['noticias'];
$scope.deportes=data['deportes'];
$scope.farandula=data['farandula'];
$scope.curiosidades=data['curiosidades'];
}, function(err){
// failure, use err for logging etc...
});
}

$scope.getnoticias();

$scope.iddel="";
$scope.categoriadel="";

$scope.adddel=function(id,categoria){
// $scope.arraydel['obj']={id:id,categori:categoria};
$scope.iddel=id;
$scope.categoriadel=categoria;
//console.log($scope.categoriadel+"---"+$scope.iddel);
}

$scope.delnoticia=function(){
  Delnews.delete({id:$scope.iddel,categoria:$scope.categoriadel});
  $scope.getnoticias();
}

});
app.controller('NoticiasEditCtrl', function($scope){
   console.log('hola noticias Edit');
});
