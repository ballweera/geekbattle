'use strict';

angular.module('geekBattleApp')

  .controller('MainCtrl', function ($scope,JsonReader,$http) {

	$scope.isBattleStarted = false;

    $scope.teams = [];
    $scope.team1List = [];
    $scope.allTeamsPlayerList = [];
    $scope.selectedTeam1Member = [];
    $scope.team1;
    $scope.selectedTeam2Member = [];
    $scope.team2;

	$scope.initData = function(){

		$scope.isBattleStarted = false;
		resetTeams();
	};

	$scope.startBattle = function(){

		$scope.isBattleStarted = true;

		$scope.teams = [];
		var promise = JsonReader.getPlayerData();
		promise.then(function(response){
			$scope.allTeamsPlayerList = response.data;
			$scope.teams.push({
      			"team":"select team",
      			"detail":[]
		   	});
			$scope.teams.push(response.data[0]);
			$scope.teams.push(response.data[1]);
			$scope.teams.push(response.data[2]);
			$scope.team1 = $scope.teams[0];
			$scope.team2 = $scope.teams[0];
		});
	};

	$scope.endBattle = function(){
		$scope.isBattleStarted = false;
		resetTeams();
		resetTeam1Players();
		resetTeam2Players();
	};

    $scope.updateTeam1PlayerList = function(){
    	$scope.team1List = ['A','B','C'];


    	if($scope.team1.team == 'kitty') {
    		$scope.selectedTeam1Member = $scope.allTeamsPlayerList[0].detail;
    	} else if ($scope.team1.team == 'pikaju') {
			$scope.selectedTeam1Member = $scope.allTeamsPlayerList[1].detail;
    	} else if ($scope.team1.team == 'vanz') {
			$scope.selectedTeam1Member = $scope.allTeamsPlayerList[2].detail;
    	} else {
    		$scope.selectedTeam1Member = [];
    		$scope.team1Player = [];
    	}
    };

    $scope.updateTeam2PlayerList = function(){
    	$scope.team2List = ['AA','BB','CC'];

    	if($scope.team2.team == 'kitty') {
    		$scope.selectedTeam2Member = $scope.allTeamsPlayerList[0].detail;
    	} else if ($scope.team2.team == 'pikaju') {
			$scope.selectedTeam2Member = $scope.allTeamsPlayerList[1].detail;
    	} else if ($scope.team2.team == 'vanz') {
			$scope.selectedTeam2Member = $scope.allTeamsPlayerList[2].detail;
    	} else {
    		$scope.selectedTeam2Member = [];
    		$scope.team2Player = [];
    	}
    };

    var resetTeams = function() {
    	$scope.teams = [];
    	$scope.teams.push({
      			"team":"select team",
      			"detail":[]
		   	});
		$scope.team1 = $scope.teams[0];
		$scope.team2 = $scope.teams[0];
    };

    var resetTeam1Players = function() {
    	$scope.selectedTeam1Member = [];
    };

    var resetTeam2Players = function() {
    	$scope.selectedTeam2Member = [];
    };

 	// $scope.team1Change = function() {
 	// 	debugger;
 	// 	if($scope.team1 = "kitty") {
 			
 	// 		// $scope.team1Player1 = $scope.jsonData[0].detail[0].player_name;
 	// 		// $scope.team1Player2 = $scope.jsonData[0].detail[1].player_name;
 	// 		// $scope.team1Player3 = $scope.jsonData[0].detail[2].player_name;

 	// 	}
 	// 	// if($scope.team1 = "pikaju") {
 	// 	// 	$scope.team1 = "pikaju";
 	// 	// 	$scope.team1Player1 = $scope.jsonData[1].detail[0].player_name;
 	// 	// 	$scope.team1Player2 = $scope.jsonData[1].detail[1].player_name;
 	// 	// 	$scope.team1Player3 = $scope.jsonData[1].detail[2].player_name;
 	// 	// }
 	// 	// if($scope.team1 = "vanz") {
 	// 	// 	$scope.team1 = "vanz";
 	// 	// 	$scope.team1Player1 = $scope.jsonData[2].detail[0].player_name;
 	// 	// 	$scope.team1Player2 = $scope.jsonData[2].detail[1].player_name;
 	// 	// 	$scope.team1Player3 = $scope.jsonData[2].detail[2].player_name;
 	// 	// }
 	// };
    

  });

