angular.module('myApp',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })
      .state('details', {
        url:'/details/:id',
        templateUrl: './views/details.html'
      })
  });



// angular.module('app6',['ui.router'])
//   .config(function($stateProvider, $urlRouterProvider){
//
//     $urlRouterProvider.otherwise('/');
//
//     $stateProvider
//       .state('home', {
//         templateUrl: 'views/home.html',
//         url: '/',
//         controller: 'homeCtrl'
//       })
//       .state('signUp', {
//         templateUrl: 'views/signup.html',
//         url: '/signup',
//         controller: 'signUpCtrl'
//       })
//       .state('details', {
//         templateUrl: 'views/details.html',
//         url: '/details/:id',
//         controller: 'detailsCtrl'
//       })
//   })
// ;
