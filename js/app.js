angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state(
      'home', {
        url: '/',
        templateUrl: 'js/home/homeTmpl.html'
    })
    .state(
      'products', {
        url: '/products',
        templateUrl: 'js/home/homeTmpl.html',
        controller: 'productsCtrl'
    })
    .state(
      'settings', {
        url: '/settings',
        templateUrl: 'js/settings/settingsTmpl.html'
    });
  $urlRouterProvider
    .otherwise('/');
});
