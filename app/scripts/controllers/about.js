'use strict';

/**
 * @ngdoc function
 * @name yoemanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoemanApp
 */
angular.module('yoemanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
