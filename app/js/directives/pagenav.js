todoApp.directive('pageNavActive', ['$location', function($location) {
   return {
      restrict: 'A', //use as attribute
      replace: false,
      link: function(scope, elem) {
         //after the route has changed
         scope.$on("$routeChangeSuccess", function() {
            debugger;
            var hrefs = ['/#' + $location.path(), '#' + $location.path(), $location.path()];
            angular.forEach(elem.find('a'), function(a) {
               a = angular.element(a);
               if (-1 !== hrefs.indexOf(a.attr('href'))) {
                  a.parent().addClass('active');
               } else {
                  a.parent().removeClass('active');
               }
            });
         });
      }
   };
}]);


todoApp.directive('pageNav', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/pagenav.html'//,
        // controller: function($scope, $location) {
        //     $scope.isPage = function(name) {
        //         return new RegExp("/" + name + "($|/)").test($location.path());
        //     };
        // }
    };
});
