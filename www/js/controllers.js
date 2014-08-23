angular.module('starter.controllers', [])

.controller('CalculadoraCtrl', function($scope, $ionicModal) {
  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/resposta.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };
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