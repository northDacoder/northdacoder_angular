'use strict';

/**
 * @ngdoc function
 * @name yoemanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoemanApp
 */
angular.module('yoemanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
