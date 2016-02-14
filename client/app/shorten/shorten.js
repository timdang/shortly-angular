angular.module('shortly.shorten', [])

.controller('ShortenController', function($scope, $location, Links) {
  // Your code here
  angular.extend($scope, Links);

  $scope.link = {};
  $scope.addLink = function(link) {
    Links.addLink(link)
      .then(function() {
        $scope.link = '';
        $location.path('/links');
      });
  };


});


/*

1. the .loading was tied to an ng-if on the html ....so that if loading was true, then spiffy
   was shown...once loading was false, spiffy wnet away


angular.module('shortly.shorten', [])

.controller('ShortenController', function($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(link) {
    $scope.loading = true;
    Links.addLink($scope.link)
      .then(function() {
        $scope.loading = false;
        $location.path('/')
      })
      .catch(function(error){
        console.log(error)
      });
  };
});



*/