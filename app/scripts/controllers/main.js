'use strict';

angular.module('geekBattleApp')
  .controller('MainCtrl', function ($scope,JsonReader) {

    $scope.teams = ['kitty', 'vanz', 'pikaju'];
    $scope.team1List = [];

    $scope.updateTeam1PlayerList = function(){
    	$scope.team1List = ['A','B','C'];
    };

  });
