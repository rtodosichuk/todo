todoApp.directive('taskEdit', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/taskedit.html',
        scope: {
            save: "&",
            cancel: "&",
            edittask : "="
        }
    }
});