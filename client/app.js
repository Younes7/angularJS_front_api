var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'PlayersController',
        templateUrl: 'views/players.html'
    })
        .when('/players', {
            controller: 'PlayersController',
            templateUrl: 'views/players.html'
        })
        .when('/players/details/:id', {
            controller: 'PlayersController',
            templateUrl: 'views/player_details.html'
        })
        .when('/players/add', {
            controller: 'PlayersController',
            templateUrl: 'views/add_player.html'
        })
        .when('/players/edit/:id', {
            controller: 'PlayersController',
            templateUrl: 'views/edit_player.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});