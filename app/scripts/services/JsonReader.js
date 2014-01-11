'use strict';

angular.module('geekBattleApp')
	.factory('JsonReader', function($http) {
		var getPlayerData = function(){

			return $http.get('scripts/data/user.json').success(function(response) {
		    	return response;
		 	});

		};
  		return {
  			getPlayerData : getPlayerData
  		}
});