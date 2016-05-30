var app = angular.module('dcApp');

app.controller('videosemanalAddCtrl', function($scope,Videosemanal){
   console.log('Video de la semana add');
   $scope.guardarvideosemanal=function(){
    Videosemanal.save($scope.data);
    console.log($scope.data);
   }
// $scope.URL="";
Videosemanal.query(0).$promise.then(function(data){
 $('#video').append(data[0].url);
console.log(data[0].url);
}, function(err){
// failure, use err for logging etc...
});

});
