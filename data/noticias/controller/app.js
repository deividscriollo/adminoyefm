var app = angular.module('dcApp').controller('NoticiasAddCtrl', function($scope,Noticias,Upload){
   console.log('hola noticias add'); 
// $scope.verdatos=function(){
// Noticias.save($scope.data);
// }

 $scope.uploadPic = function(file) {
    console.log(file);
    // file.upload = Upload.upload({
    //   url: 'http://192.168.1.31/api-admin-oyefm/public/noticias',
    //   data: {username: $scope.data, file: file},
    // });
    }

   // $('[data-toggle="tooltip"]').tooltip();
});

var app = angular.module('dcApp').controller('NoticiasPreviewCtrl', function($scope){
   console.log('hola noticias Preview');
   $('[data-toggle="tooltip"]').tooltip();
});
var app = angular.module('dcApp').controller('NoticiasUpdateCtrl', function($scope,Noticias){
   console.log('hola noticias update');
      $scope.news=Noticias.query();
      console.log(Noticias.query());
});
var app = angular.module('dcApp').controller('NoticiasEditCtrl', function($scope){
   console.log('hola noticias Edit');
});
