 app.initialize();
        var calendarDefault = myApp.calendar({
            input: '#calendar-default',
            dateFormat: 'dd/mm/yyyy',
        }); 
        
        var calendarDefault2 = myApp.calendar({
            input: '#calendar-default2',
            dateFormat: 'dd/mm/yyyy',
        });


        var apk = angular.module('listaProdutos',[]);
        apk.controller('listaProdutosCtrl', function ($scope){
            $scope.title = 'Lista Produtos';
            $scope.store = function (nome,dt_ini,dt_fim){
                //alert(nome+':'+dt_ini);
                var obj = {'nome': nome,
                           'inicio': dt_ini,
                          'termino': dt_fim};
                localStorage.setItem(nome,JSON.stringify(obj));
                $scope.inicio = "";
                list();
            }
            $scope.delete = function (item){
                alert(item);
                if(item){
                    localStorage.removeItem(item);
                }
                else{
                    localStorage.clear();
                }
            }
            
            list();
            
            
            function list(){
                var tam = localStorage.length;
                $scope.itens = [];
                while(tam >= 0) {
                    
                    if(localStorage.key(tam)){
                        
                        var chave = localStorage.key(tam);
                        var obj2 = JSON.parse(localStorage.getItem(chave));
                        $scope.itens.push(obj2);
                    }
                    tam = tam-1;
               }
            } //fim list
            
           
        });