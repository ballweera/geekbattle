'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('geekBattleApp'));

  var MainCtrl,
    scope;

  var teams = ['kitty', 'vanz', 'pikaju'];
  var teamList = ['A','B','C']

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
});
