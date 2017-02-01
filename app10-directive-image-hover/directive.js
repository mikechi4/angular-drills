angular.module('myApp')
  .directive('myDirective',function(){



    return {
      templateUrl: 'directive.html',
      restrict:'E',
      scope: {
        success: '@'
      }
      }


  })
