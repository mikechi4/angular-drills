angular.module('myApp')
  .controller('mainCtrl', function($scope){
    $scope.getAuth = function(){
      alert('you passed the test!');
    }
  })
