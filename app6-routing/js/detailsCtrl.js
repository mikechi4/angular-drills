angular.module('myApp')
  .controller('detailsCtrl', function($scope){
    $scope.message = 'hello details'
  })


// angular.module('app6')
//   .controller('detailsCtrl', function($scope, petsService, $stateParams) {
//     $scope.message = 'Details';
//
//     petsService.getOnePet($stateParams.id).then(function(response){
//       $scope.pet = response.data;
//     })
//   })
