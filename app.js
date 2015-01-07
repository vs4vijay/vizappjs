/*  app.js
*   Author: Vijay Soni (vs4vijay@gmail.com)
*/

var app = angular.module('app', ['ngRoute', 'ngResource']);


angular.module('app').controller('MainCtrl', ['$scope', 'AppService', function($scope, AppService) {
  $scope.appModel = {};

}]);


angular.module('app').service('AppService', ['$resource', function($resource) {

  var APP_ID = '5ed697172773474a9a0188365e10c4c0';
  // URL is http://openexchangerates.org/api/latest.json?app_id=5ed697172773474a9a0188365e10c4c0
  var AppResource = $resource('http://openexchangerates.org/api/:operation.json', {
    operation: '@operation'
  }, {
    getCurrencies: {
      method: 'GET',
      params: {
        operation: 'currencies',
        app_id: APP_ID
      }
    }
  });

  return AppResource;
}]);
