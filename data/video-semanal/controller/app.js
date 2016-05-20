var app = angular.module('dcApp');

app.controller('videosemanalAddCtrl', function($scope,Videosemanal){
   console.log('Video de la semana add');
   $scope.guardarvideosemanal=function(){
    Videosemanal.save($scope.data);
    console.log($scope.data);
   }
});
