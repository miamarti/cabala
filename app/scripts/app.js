'use strict';

/**
 * @ngdoc overview
 * @name cabalaApp
 * @description
 * # cabalaApp
 *
 * Main module of the application.
 */
angular.module('cabalaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
