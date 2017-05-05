todoApp.directive('datePicker', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            element
            .datepicker({ 
                orientation: "bottom auto",
                autoclose: true })
            .on('changeDate', function(e) {
                ngModelCtrl.$setViewValue(e.date);
                scope.$apply();
            });
            
            element.next('span')
            .click(function() {
                element.datepicker('show');
            });
        }
    }
});