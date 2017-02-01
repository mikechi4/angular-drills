angular.module('myApp')
  .directive('myDirective',function(){



    return {
      templateUrl: 'directive.html',
      restrict:'A',
      link: function(scope, element, attribute){
        element.on('click', function(){
          this.select();
        })
      }
    }

  })
