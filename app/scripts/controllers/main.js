'use strict';

angular.module('geekBattleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.teams = ['kitty', 'vanz', 'pikaju'];
    $scope.team1List = [];

    $scope.updateTeam1PlayerList = function(){
    	$scope.team1List = ['','',''];
    };

  });
