angular.module('myApp')
  .controller('homeCtrl', function($scope, mainService) {
    $scope.getSmurfs = function() {
      mainService.getSmurfs().then(function(response){
        $scope.smurfs = response.data;
      })
    }
    $scope.getSmurfs();
  } )



// angular.module('app6')
//   .controller('homeCtrl', function($scope, petsService) {
//     $scope.title = "Home!"
//
//     petsService.getPets().then(function(response){
//       $scope.pets = response.data;
//     })
//   })
