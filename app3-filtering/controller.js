angular.module('myApp')
  .controller('mainCtrl', function($scope, mainService){
    $scope.message = ' hello from controlla'

    $scope.data = mainService.getData();
  })



// angular.module("myApp")
//   .controller('mainCtrl', function($scope, mainService){
//
//     $scope.people = mainService.getData();
//   })
// ;
