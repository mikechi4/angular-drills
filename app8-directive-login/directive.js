angular.module('myApp')
  .directive('loginDirective', function(){
    return{
      templateUrl: 'loginDirective.html',
      restrict: 'E'
    }
  })
