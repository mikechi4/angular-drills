angular.module('myApp')
  .directive('headerDirective', function(){
    return{
      templateUrl: 'headerDirective.html',
      restrict: 'E',
      link: function(scope, element, attribute) {

      }
    }
  })
