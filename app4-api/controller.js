angular.module('myApp')
  .controller('mainCtrl', function($scope, mainService){
    $scope.getStarships = function(){
      mainService.getStarships().then(function(response){
        $scope.ships = response.data.results
      })
    }
    $scope.getStarships();
  })

//
// angular.module('myApp')
//   .controller('mainCtrl', function($scope, mainService){
//     $scope.getStarships = function(){
//     mainService.getStarships().then(function(response){
//       $scope.ships = response.data.results
//     })
//     }
//     $scope.getStarships();
//   })
