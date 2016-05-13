var app = angular.module('dcApp').controller('NoticiasAddCtrl', function($scope,Noticias){
   console.log('hola noticias add'); 
$scope.verdatos=function(){
Noticias.save($scope.data);
}
$scope.onFileSelect = function($file) {
    $scope.upload = $file[0];
};

   // $('[data-toggle="tooltip"]').tooltip();
});

var app = angular.module('dcApp').controller('NoticiasPreviewCtrl', function($scope){
   console.log('hola noticias Preview');
});
var app = angular.module('dcApp').controller('NoticiasUpdateCtrl', function($scope,Noticias){
   console.log('hola noticias update');
      $scope.news=Noticias.query();
      console.log(Noticias.query());
});
var app = angular.module('dcApp').controller('NoticiasEditCtrl', function($scope){
   console.log('hola noticias Edit');
});
