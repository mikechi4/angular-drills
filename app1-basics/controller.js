angular.module('myApp')
  .controller('mainCtrl', function($scope){
    $scope.message = 'hello from the controlla';
    $scope.newMessage = '';
  });




//
//
//
// angular.module('myApp')
//   .controller('mainCtrl', function($scope) {
//     $scope.message = ' hello'
//     $scope.changeMessage = function(newMessage) {
//       $scope.message = newMessage;
//       $scope.newMessage = '';
//     }
//   })
// ;
