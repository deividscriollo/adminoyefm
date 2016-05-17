var app = angular.module('dcApp');


app.controller('ProgramasAddCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {

console.log('add programa');
$scope.semana = [{name:'Lunes'},{name:'Martes'},{name:'Miercoles'},{name:'Jueves'},{name:'Viernes'},{name:'Sábado'},{name:'Domingo'}];
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
        //Programas.save($scope.data);
console.log($scope.data);

file.upload = Upload.upload({
      url: 'http://192.168.1.31/api-admin-oyefm/public/programas',
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
console.log($scope.locutoresarray);
    }
}]);


// app.directive('fileModel', ['$parse', function ($parse) {
//     return {
//         restrict: 'A',
//         link: function(scope, element, attrs) {
//             var model = $parse(attrs.fileModel);
//             var modelSetter = model.assign;
            
//             element.bind('change', function(){
//                 scope.$apply(function(){
//                     modelSetter(scope, element[0].files[0]);
//                 });
//             });
//         }
//     };
// }]);


// app.controller('ProgramasAddCtrl', function($scope,Programas){
// console.log('add programa');
// $scope.locutoresarray = [];
// $('#hfin').bootstrapMaterialDatePicker({ time: true, date: false, format: 'hh:mm A', stateColor: 'info' });
// $('#hinicio').bootstrapMaterialDatePicker({ time: true, date: false, format: 'hh:mm A', stateColor: 'info' });

// $scope.semana = [{name:'Lunes'},{name:'Martes'},{name:'Miercoles'},{name:'Jueves'},{name:'Viernes'},{name:'Sábado'},{name:'Domingo'}];
//     $scope.folder = {};


//    $scope.uploadPic = function(file) {
//     file.upload = Upload.upload({
//         method:"POST",
//       url: 'http://192.168.1.31/api-admin-oyefm/public/noticias',
//       data: {username: $scope.username, file: file},
//     });
//     file.upload.then(function (response) {
//       $timeout(function () {
//         console.log(response.data);
//       });
//     }, function (response) {
//       if (response.status > 0)
//         console.log(response.status + ': ' + response.data);
//     });
//     }

// // $scope.guardarprograma=function(){

// // // 	    $scope.albumNameArray = [];
// // // 	    angular.forEach($scope.folder,function(key,value){
// // //             if(key)
// // //                 $scope.albumNameArray.push(value)
// // //         });
// // //         $scope.data["dias"]=$scope.albumNameArray;
// // //         $scope.data["locutores"]=$scope.locutoresarray;
// // //         $scope.data["hinicio"]=$('#hinicio').val();
// // //         $scope.data["hfin"]=$('#hfin').val();
// // // //        $scope.data["file"]= $scope.myFile;
// // //         Programas.save($scope.data);
// // // console.log($scope.data);
// // }
// $scope.addlocutor=function(){
// $scope.locutoresarray.push($scope.locutor);
// $scope.locutor="";
// console.log($scope.locutoresarray);
// }
// });