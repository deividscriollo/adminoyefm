var app = angular.module('dcApp');
app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);


app.controller('ProgramasAddCtrl', function($scope,Programas){
console.log('add programa');
$scope.locutoresarray = [];
$('#hfin').bootstrapMaterialDatePicker({ time: true, date: false, format: 'hh:mm A', stateColor: 'info' });
$('#hinicio').bootstrapMaterialDatePicker({ time: true, date: false, format: 'hh:mm A', stateColor: 'info' });

$scope.semana = [{name:'Lunes'},{name:'Martes'},{name:'Miercoles'},{name:'Jueves'},{name:'Viernes'},{name:'Sábado'},{name:'Domingo'}];
    $scope.folder = {};


$scope.guardarprograma=function(){
	    $scope.albumNameArray = [];
	    angular.forEach($scope.folder,function(key,value){
            if(key)
                $scope.albumNameArray.push(value)
        });
        $scope.data["dias"]=$scope.albumNameArray;
        $scope.data["locutores"]=$scope.locutoresarray;
        $scope.data["hinicio"]=$('#hinicio').val();
        $scope.data["hfin"]=$('#hfin').val();
//        $scope.data["file"]= $scope.myFile;
        Programas.save($scope.data);
console.log($scope.data);
}
$scope.addlocutor=function(){
$scope.locutoresarray.push($scope.locutor);
$scope.locutor="";
console.log($scope.locutoresarray);
}
});