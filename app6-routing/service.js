angular.module('myApp')
  .service('mainService', function($http){
    this.getSmurfs = function(){
      return $http({
        method:'GET',
        url: 'http://smurfs.devmounta.in/smurfs/'
      })
    }
  })


// angular.module('app6')
//   .service('petsService', function($http){
//     var baseUrl = 'http://practiceapi.devmountain.com';
//
//     //make function
//     //get all pets from API
//     //return them to controller
//
//     this.getPets = function(){
//       return $http({
//         method: 'GET',
//         url: baseUrl + '/pets'
//       })
//     }
//
//     this.getOnePet = function(id){
//       //do http request
//       //get one pet by id
//       //retun to controller
//       return $http({
//         method: 'GET',
//         url: baseUrl + '/pets/' + id
//       })
//     }
//   })
