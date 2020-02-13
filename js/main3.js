function TimetableCtrl($scope, $http) {
    $http.get('items.json')
    .success(function(data) { $scope.sessions = data.sessions; })
    .error(function(data) { console.log('error'); });
}