var jobviteapp = angular.module('jobviteapp', ['ui.bootstrap']);

jobviteapp.controller('jobviteController', ['$scope', '$http', function($scope, $http){

	$scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];
	
}])