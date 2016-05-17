<<<<<<< HEAD
var app = angular.module('dcApp').controller('NoticiasAddCtrl', function($scope,Noticias,Upload, $resource, $timeout){
    

    $('[data-toggle="tooltip"][data-bmd-state]').tooltip();
    $('[data-toggle="tooltip"]').tooltip()

    $scope.uploadPic = function(file) {
    file.upload = Upload.upload({
      url: 'http://localhost:8000/noticias',
      data: {username: $scope.username, file: file},
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


   // console.log('hola noticias add'); 
   // $scope.newImage = {};
   //  $scope.verdatos=function(){

   //    Noticias.get(function(result) {
   //        if (result.status != 'OK')
   //            throw result.status;

   //        $scope.images = result.data;
   //    });
   //     $scope.newImage = {};
   //  }

 // $scope.uploadPic = function(file) {
    // console.log(file);
=======
var app = angular.module('dcApp').controller('NoticiasAddCtrl', function($scope,Noticias){
   console.log('hola noticias add'); 
// $scope.verdatos=function(){
// Noticias.save($scope.data);
// }

 $scope.uploadPic = function(file) {
    console.log(file);
>>>>>>> origin/master
    // file.upload = Upload.upload({
    //   url: 'http://192.168.1.31/api-admin-oyefm/public/noticias',
    //   data: {username: $scope.data, file: file},
    // });
    // }

   // $('[data-toggle="tooltip"]').tooltip();

    // var Image = $resource('http://localhost/api-admin-oyefm/public/noticias/:id', {id: "@_id"});

    // Image.save(function(result) {
    //     if (result.status != 'OK')
    //         throw result.status;
    //         $scope.images = result.data;
    // })

    // $scope.newImage = {};

    // $scope.submit = function() {
    //     Image.save($scope.newImage, function(result) {
    //         if (result.status != 'OK')
    //             throw result.status;

    //         $scope.images.push(result.data);
    //     });
    // }

    // function formDataObject (data) {
    //         var fd = new FormData();
    //         angular.forEach(data, function(value, key) {
    //             fd.append(key, value);
    //         });
    //         return fd;
    //     }

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
