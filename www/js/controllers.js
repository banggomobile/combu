angular.module('starter.controllers', [])

.controller('CalculadoraCtrl', function($scope) {
	$scope.gasolina = ''/100;
	$scope.etanol = ''/100;
	$scope.precoGasolina = ''/100;
	$scope.precoEtanol = ''/100;
	})

.controller('FriendsCtrl', function($scope) {
	$scope.volume = ''/100;
})

.controller('ConfigCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})