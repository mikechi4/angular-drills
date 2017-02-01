angular.module('myApp')
  .service('mainService', function($http){
    this.getStarships = function(){
      return $http({
        method: 'GET',
        url: 'https://swapi.co/api/starships'
      })
    }
  });
//
//
// angular.module('myApp')
//   .service('mainService', function($http){
//     this.getStarships = function(){
//       return $http({
//         method: 'GET',
//         url:'https://swapi.co/api/starships'
//       })
//     }
//   })
