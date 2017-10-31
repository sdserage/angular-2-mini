angular.module('myApp').service('productSrvc', function($http) {
  this.getShoeData = () => {method: 'GET', url: 'https://practiceapi.devmountain.com/products?category=shoes'};
  this.getSockData = () => {method: 'GET', url: 'https://practiceapi.devmountain.com/products?category=socks'};
});
