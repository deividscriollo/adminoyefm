var app = angular.module('dcApp').controller('NoticiasAddCtrl', function($scope){
   console.log('hola noticias add'); 

   // $('[data-toggle="tooltip"]').tooltip();
});
var app = angular.module('dcApp').controller('NoticiasPreviewCtrl', function($scope){
   console.log('hola noticias Preview');
});
var app = angular.module('dcApp').controller('NoticiasUpdateCtrl', function($scope,service){
   console.log('hola noticias update');
var t = $('#tabla-noticias').DataTable();	
service.shownoticicas().then(function(d) {
  for (var i = 0; i < d.data.length; i++) {
  	t.row.add( [
			d.data[i].id,
            d.data[i].titulo,
            d.data[i].URL,
            d.data[i].referencia,
			"<a href='#' class='btn-primary bmd-ripple btn-xs' data-toggle='modal' data-target='#modal-update' style='text-decoration: none'><span class='flaticon-create3' style='color:white'> Editar</span></a>\
                            <a href='#' class='btn-danger bmd-ripple btn-xs' data-toggle='modal' data-target='#modal-delete' style='text-decoration: none'><span class='flaticon-rubbish' style='color:white;'> Eliminar</span></a>"
		] ).draw( false );
         }  
	});

      // service.shownoticicas().then(function(d) {

      //     });



});
var app = angular.module('dcApp').controller('NoticiasEditCtrl', function($scope){
   console.log('hola noticias Edit');
});
