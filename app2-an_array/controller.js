angular.module('arrayApp')
  .controller('mainCtrl', function($scope, arrayService){
    $scope.message = ' helloooo from tha controlla'

    $scope.getData = arrayService.getData();
    
  })


// angular.module('arrayApp')
//   .controller('arrayController', function($scope, arrayService){
//     $scope.data = arrayService.getData();
//
//     $scope.addNewPerson = function(newName, newNumber) {
//       arrayService.addNewPerson(newName, newNumber);
//     }
//   })
