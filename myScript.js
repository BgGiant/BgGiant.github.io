(function(){
    
    var myApp = angular
                    .module("myModule",[])
                    .controller("MainController",function($scope,$http,$log){

                 $http.get("https://forverkliga.se/JavaScript/api/simple.php?world")
                             .then(function(response){
                                $scope.output = response.data;
                                $scope.sortColumn = "name";
                                $scope.reverseSort = false;
                     
                                 //$scope.totalRow=function(){
                                            $scope.countRows = $scope.output.length;
                                // }
                                $scope.sortBy = function(column){
                                    $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                                    $scope.sortColumn = column;
                                }
                                
                                $scope.getSortByClass = function(column){
                                    if($scope.sortColumn == column){
                                       return $scope.reverseSort ? 'glyphicon glyphicon-triangle-bottom' : 'glyphicon glyphicon-triangle-top';
                                    }
                                    return '';
                                }
                                
                              $scope.deleteRow = function(name){				
                                    var index = -1;		
                                    var worldArrApi = eval( $scope.output );
                                    for( var i = 0; i < worldArrApi.length; i++ ) {
                                        if( worldArrApi[i].name === name ) {
                                            index = i;
                                            break;
                                        }
                                    }
                                    if( index === -1 ) {
                                        alert( "Hmm, Guess what, Bad things happened!." );
                                    }
                                    $scope.output.splice( index, 1 );
                                    $scope.countRows = $scope.output.length;
                                }
                              
                            $scope.addRow = function(){		
                                $scope.output.push({ 
                                        'name':$scope.name,
                                        'continent': $scope.continent, 'population':$scope.population,
                                        'pFemale':$scope.pFemale
                                    });
                                $scope.name='';
                                $scope.continent='';
                                $scope.population='';
                                $scope.pFemale='';
                                $scope.countRows = $scope.output.length;
                            }
                            
                            
                    ///////////////////////////////
                              
                   },function(reason){
                            $scope.error=reason.data;
                            $log.info(reason);
                 });
 });
})();