    // create the module and name it scotchApp
    

   var app = angular.module('dcApp');

    // Lockr.flush()
    // configure our routes
    app.config(function($routeSegmentProvider) {

        $routeSegmentProvider
        .when('/',    's0')
        .when('/Top10',    'top10')
        .when('/Top10/add',    'top10.add')
        // .when('/Top10/update',    'top10.update')

        .when('/Programas',    'programas')
        .when('/Programas/add',    'programas.add')
        .when('/Programas/update',    'programas.update')

        .when('/Noticias',    'noticias')
        .when('/Noticias/add',    'noticias.add')
        .when('/Noticias/preview',    'noticias.preview')
        .when('/Noticias/update',    'noticias.update')
        .when('/Noticias/edit',    'noticias.edit')
        
        .when('/Galeria',    'galeria')
        .when('/Galeria/add',    'galeria.add')

        .when('/Slider',    'slider')
        .when('/Slider/add',    'slider.add')

        .when('/Clientes',    'clientes')
        .when('/Clientes/add',    'clientes.add')

        .when('/Video-semanal',    'video_semanal')
        .when('/Video-semanal/add',    'video_semanal.add')

        .when('/Radio',    'radio')
        .when('/Radio/add',    'radio.add')

        .when('/Registro',    'registro')
        .when('/Login',    'session')        
        .when('/'+'Imbabura/home',    's1.home')
        .when('/'+'Imbabura/Corporativo',    's1.corporativo')
        .when('/'+'Imbabura/Tarifa',    's1.tarifa')
        .when('/'+'Imbabura/Programacion',    's1.programacion')
        .when('/'+'Imbabura/Podcast',    's1.podcast')
        .when('/'+'Imbabura/Noticias',    's1.noticias')
        .when('/'+'Imbabura/Contactos',    's1.contactos')
        .when('/'+'Imbabura/Despertador',    's1.despertador')
        .when('/'+'Imbabura/LaSartenPorElMango',    's1.sarten')
        .when('/'+'Imbabura/Inbox',    's1.inbox')
        .when('/'+'Imbabura/LosHP',    's1.hp')
        .when('/'+'Imbabura/CodigoDeontologico',    's1.codigo')
        .when('/'+'Imbabura/TarifasAsesor/:id',    's1.tarifasasesor')        
        .when('/'+'SantoDomingo',    's2')
        .when('/'+'Esmeraldas',    's3')
        .segment('noticias', {
            templateUrl: 'data/noticias/view/index.html'
        })
            .within()
                .segment('add', {
                    'default': true,
                    templateUrl: 'data/noticias/view/add.html',
                    controller: 'NoticiasAddCtrl'
                })
                .segment('preview', {
                    templateUrl: 'data/noticias/view/preview.html',
                    controller: 'NoticiasPreviewCtrl'
                    // dependencies: ['id']
                })
                .segment('update', {
                    templateUrl: 'data/noticias/view/update.html',
                    controller: 'NoticiasUpdateCtrl'
                })
                .segment('edit', {
                    templateUrl: 'data/noticias/view/edit.html',
                    controller: 'NoticiasEditCtrl'
                })                               
            .up()
        .segment('s1', {
            templateUrl: 'data/imbabura/home.html',
            controller: 'imbaburaCtrl'})            
        .within()
            .segment('home', {
                'default': true,
                templateUrl: 'data/imbabura/inicio.html',
                controller: 'imbahomeCtrl'
            })
                           
        .up()
        .segment('s0', {
            templateUrl: 'data/home/view/index.html',
            // controller: 'homeCtrl'
        })   
        .segment('registro', {
            templateUrl: 'data/registro/view/index.html',
            // controller: 'homeCtrl'
        })
        .segment('programas', {
            templateUrl: 'data/programas/view/index.html',
            // controller: 'homeCtrl'
        })
        .within()
                .segment('add', {
                    'default': true,
                    templateUrl: 'data/programas/view/add.html',
                    controller: 'ProgramasAddCtrl'
                })
                // .segment('preview', {
                //     templateUrl: 'data/programas/view/preview.html',
                //     controller: 'ProgramasPreviewCtrl'
                //     // dependencies: ['id']
                // })
                .segment('update', {
                    templateUrl: 'data/programas/view/update.html',
                    controller: 'ProgramasUpdateCtrl'
                })
                // .segment('edit', {
                //     templateUrl: 'data/programas/view/edit.html',
                //     controller: 'PoticiasEditCtrl'
                // })                               
            .up()
            .segment('galeria', {
            templateUrl: 'data/galeria/view/index.html',
            // controller: 'homeCtrl'
        })
        .within()
                .segment('add', {
                    'default': true,
                    templateUrl: 'data/galeria/view/add.html',
                    controller: 'galeriaAddCtrl'
                })                        
            .up()

              .segment('video_semanal', {
            templateUrl: 'data/video-semanal/view/index.html',
            // controller: 'homeCtrl'
        })
        .within()
                .segment('add', {
                    'default': true,
                    templateUrl: 'data/video-semanal/view/add.html',
                    controller: 'videosemanalAddCtrl'
                })                        
            .up()

        .segment('slider', {
            templateUrl: 'data/slider/view/index.html',
            // controller: 'homeCtrl'
        })
        .within()
                .segment('add', {
                    'default': true,
                    templateUrl: 'data/slider/view/add.html',
                    controller: 'sliderAddCtrl'
                })                        
            .up()
              .segment('clientes', {
            templateUrl: 'data/clientes/view/index.html',
            // controller: 'homeCtrl'
        })
        .within()
                .segment('add', {
                    'default': true,
                    templateUrl: 'data/clientes/view/add.html',
                    controller: 'clientesAddCtrl'
                })                        
            .up()

        .segment('session', {
            templateUrl: 'data/session/view/index.html',
            controller: 'loginController'
        })

        .segment('top10', {
            templateUrl: 'data/top10/view/index.html',
            // controller: 'homeCtrl'
        })
        .within()
                .segment('add', {
                    'default': true,
                    templateUrl: 'data/top10/view/add.html',
                    controller: 'top10AddCtrl'
                })
                .segment('update', {
                    templateUrl: 'data/top10/view/update.html',
                    controller: 'top10UpdateCtrl'
                })                            
            .up()
            .segment('galeria', {
            templateUrl: 'data/galeria/view/index.html',
            // controller: 'homeCtrl'
        })

            .segment('radio', {
            templateUrl: 'data/top10/view/index.html',
            // controller: 'homeCtrl'
        })
        .within()
                .segment('add', {
                    'default': true,
                    templateUrl: 'data/radios/view/add.html',
                    controller: 'RadiosCtrl'
                })                        
            .up()


    });

    app.controller('mainController', function($scope, $rootScope){
        $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
            $rootScope.animation = currRoute.animation;
        });
        // $scope.sucursal=datainfo.sucursal[0];
        // console.log($scope.sucursal);
    });
    app.controller('noticiasaddCtrl', function($scope, $rootScope){
       
    });


