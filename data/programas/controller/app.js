var app = angular.module('dcApp').controller('ProgramasAddCtrl', function($scope,Programas){
console.log('add programa');
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
        $scope.data["hinicio"]=$('#hinicio').val();
        $scope.data["hfin"]=$('#hfin').val();
       Programas.save($scope.data);
//console.log($scope.data);
}
});