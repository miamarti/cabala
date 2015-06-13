'use strict';

String.prototype.specialCharacters = function () {
    var withAccent = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ';
    var unaccented = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
    var newWord = '';
    for (var i = 0; i < this.length; i++) {
        if (withAccent.search(this.substr(i, 1)) >= 0) {
            newWord += unaccented.substr(withAccent.search(this.substr(i, 1)), 1);
        } else {
            newWord += this.substr(i, 1);
        }
    }
    return newWord.toUpperCase();
};

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
    'ngTouch',
    'mobile-angular-ui'
  ]).config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
    }).when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).when('/overview', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl'
    }).when('/ads', {
        templateUrl: 'views/ads.html',
        controller: 'AdsCtrl'
    }).otherwise({
        redirectTo: '/login'
    });
});