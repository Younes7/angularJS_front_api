var myApp = angular.module('myApp');

myApp.controller('PlayersController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams){
    console.log("joueurs chargés");
    $scope.getPlayers = function(){

        $http.get('/api/players').then(function(response){

            $scope.players = response.data;
            // console.log(response);
            
        });
    }

    $scope.getPlayer = function(){
        // console.log(response);
        
        var id = $routeParams.id;
        $http.get('/api/players/'+id).then(function(response){
            console.log(response.data);
            $scope.player = response.data;

        })
    }
    $scope.addPlayer = function () {
        // console.log($scope.player);
        $http.post('/api/players/', $scope.player).then(function (response) {
            window.location.href = '#/players';
        });
    }
    $scope.updatePlayer = function () {
        var id = $routeParams.id;
        $http.put('/api/players/' + id, $scope.player).then(function (response) {
            window.location.href = '#/players';
        });
    }
    $scope.removePlayer = function (id) {
        $http.delete('/api/players/' + id).then(function (response) {
            window.location.href = '#/players';
        });
    }





}]);



