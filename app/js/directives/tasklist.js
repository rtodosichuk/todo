todoApp.directive('taskList', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/tasklist.html'
    }
});