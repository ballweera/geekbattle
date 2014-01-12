'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('geekBattleApp'));

  var MainCtrl,
    scope;

  var teams = ['kitty', 'vanz', 'pikaju'];
	var tua = { 'player_name': 'Tua', 'image':'images/player/tua.jpg' };
	var dol = { 'player_name': 'Dol', 'image':'images/player/dol.jpg' };
  // var teamList = ['A','B','C'];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  beforeEach(function() {
    scope.teams = teams;
    scope.team1List = [];
    scope.team2List = [];
  });

  describe('Teams', function() {
    it('should have 3 teams in teams list', function() {
      expect(scope.teams.length).toBe(3);
    });

    it('team1List should have 3 players in team1List list when choose "kitty" team', function() {
      expect(scope.team1List.length).toBe(0);
      scope.team1 = scope.teams[0];
      scope.updateTeam1PlayerList();
      expect(scope.team1List.length).toBe(3);
    });

    it('team1List should have 3 players: "A", "B", "C" when choose "kitty" team', function() {
      expect(scope.team1List.length).toBe(0);
      scope.team1 = scope.teams[0];
      scope.updateTeam1PlayerList();
      expect(scope.team1List.length).toBe(3);
      expect(scope.team1List[0]).toBe('A');
      expect(scope.team1List[1]).toBe('B');
      expect(scope.team1List[2]).toBe('C');
    });
  });

  describe('TeamPlayerList', function() {
    it('should have empty team1List and team2List', function() {
      expect(scope.team1List.length).toBe(0);
      expect(scope.team2List.length).toBe(0);
    });

    it('should have 3 players in team1List after facilitator choose team1 as "kitty"', function() {
      expect(scope.team1List.length).toBe(0);
      scope.team1 = scope.teams[0];
      scope.updateTeam1PlayerList();
      expect(scope.team1List[0]).toBe('A');
      expect(scope.team1List[1]).toBe('B');
      expect(scope.team1List[2]).toBe('C');
    });

    it('should have 3 players in team2List after facilitator choose team2 as "vanz"', function() {
      expect(scope.team2List.length).toBe(0);
      scope.team2 = scope.teams[1];
      scope.updateTeam2PlayerList();
      expect(scope.team2List[0]).toBe('AA');
      expect(scope.team2List[1]).toBe('BB');
      expect(scope.team2List[2]).toBe('CC');
    });
  });

  describe('judge1SelectedPlayer', function() {
    it('should be 1 when judge1 select player1 as a winner', function() {
      scope.judge1SelectedPlayer = 1
      expect(scope.judge1SelectedPlayer).toBe(1);
    });

    it('should be 2 when judge1 select player2 as a winner', function() {
      scope.judge1SelectedPlayer = 2
      expect(scope.judge1SelectedPlayer).toBe(2);
    });
  });

  describe('battleLog', function() {
    it('should have "Judge1 has selected player1 as a winner" at latest item when judge1 select player1 as a winner', function() {
      scope.judge1SelectedPlayer = 1;
      scope.judgeSelectWinner(1);
      var logItem = scope.battleLog[scope.battleLog.length - 1];
      expect(logItem.message).toBe("Judge1 has selected player1 as a winner");
    });

    it('should have "Judge2 has selected player1 as a winner" at latest item when judge2 select player1 as a winner', function() {
      scope.judge2SelectedPlayer = 1
      scope.judgeSelectWinner(2);
      var logItem = scope.battleLog[scope.battleLog.length - 1];
      expect(logItem.message).toBe("Judge2 has selected player1 as a winner");
    });

    it('should have "Judge3 has selected player1 as a winner" at latest item when judge3 select player1 as a winner', function() {
      scope.judge3SelectedPlayer = 1
      scope.judgeSelectWinner(3);
      var logItem = scope.battleLog[scope.battleLog.length - 1];
      expect(logItem.message).toBe("Judge3 has selected player1 as a winner");
    });

    it('should have "Judge1 has selected player2 as a winner" at latest item when judge1 select player2 as a winner', function() {
      scope.judge1SelectedPlayer = 2
      scope.judgeSelectWinner(1);
      var logItem = scope.battleLog[scope.battleLog.length - 1];
      expect(logItem.message).toBe("Judge1 has selected player2 as a winner");
    });

    it('should have "Judge2 has selected player2 as a winner" at latest item when judge2 select player2 as a winner', function() {
      scope.judge2SelectedPlayer = 2
      scope.judgeSelectWinner(2);
      var logItem = scope.battleLog[scope.battleLog.length - 1];
      expect(logItem.message).toBe("Judge2 has selected player2 as a winner");
    });

    it('should have "Judge3 has selected player2 as a winner" at latest item when judge3 select player2 as a winner', function() {
      scope.judge3SelectedPlayer = 2
      scope.judgeSelectWinner(3);
      var logItem = scope.battleLog[scope.battleLog.length - 1];
      expect(logItem.message).toBe("Judge3 has selected player2 as a winner");
    });
  });

	describe('TeamPlayerPicture', function() {
		it('should have default image ("images/judge.jpg") for team1 and team2 when application will run', function() {
			scope.initData();
			expect(scope.team1PlayerPicture).toBe('images/judge.jpg');
			expect(scope.team2PlayerPicture).toBe('images/judge.jpg');
		});

		it('should have "images/player/tua.jpg" when choose Tua in team vanz', function() {
			scope.team1Player = tua;
			scope.updateTeam1PlayerPicture();
			expect(scope.team1PlayerPicture).toBe('images/player/tua.jpg');
		});

		it('should have "images/player/dol.jpg" when choose Dol in team kitty', function() {
			scope.team2Player = dol;
			scope.updateTeam2PlayerPicture();
			expect(scope.team2PlayerPicture).toBe('images/player/dol.jpg');
		});
	});
});
