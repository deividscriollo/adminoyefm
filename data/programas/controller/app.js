var app = angular.module('dcApp');

app.controller('ProgramasAddCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {

console.log('add programa');
$scope.semana = [{name:'Lunes  '},{name:'Martes'},{name:'Miercoles'},{name:'Jueves'},{name:'Viernes'},{name:'Sábado'},{name:'Domingo'}];
 $scope.folder = {};
$scope.locutoresarray = [];
$('#hfin').bootstrapMaterialDatePicker({ time: true, date: false, format: 'hh:mm A', stateColor: 'info' });
$('#hinicio').bootstrapMaterialDatePicker({ time: true, date: false, format: 'hh:mm A', stateColor: 'info' });

    $scope.uploadPic = function(file) {
    $scope.albumNameArray = [];
       angular.forEach($scope.folder,function(key,value){
            if(key)
                $scope.albumNameArray.push(value)
        });

        $scope.data["dias"]=$scope.albumNameArray.toString();
        $scope.data["locutores"]=$scope.locutoresarray;
        $scope.data["hinicio"]=$('#hinicio').val();
        $scope.data["hfin"]=$('#hfin').val();


file.upload = Upload.upload({
      url: 'http://apiadmin.nextbook.ec/public/programas',
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
$scope.addlocutor=function(){
$scope.locutoresarray.push($scope.locutor);
$scope.locutor="";
//console.log($scope.locutoresarray);
    }
}]);

app.controller('ProgramasUpdateCtrl', function($scope,Programas){
   console.log('hola programa update');
   $scope.programas=[];
   $scope.getprogramas=function(){
Programas.get('programas').$promise.then(function(data){
$scope.programas=data['programas'];
}, function(err){
// failure, use err for logging etc...
});
}
$scope.getprogramas();


});
