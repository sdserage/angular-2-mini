angular.module('myApp').service('productsSrvc', function($http) {
  this.getShoeData = () => $http({method: 'GET', url: 'https://practiceapi.devmountain.com/products?category=shoes'});
  this.getSockData = () => $http({method: 'GET', url: 'https://practiceapi.devmountain.com/products?category=socks'});
});
