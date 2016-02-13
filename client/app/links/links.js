angular.module('shortly.links', [])

.controller('LinksController', function($scope, Links) {
  // Your code here
  angular.extend($scope, Links);

  $scope.data = {};

  $scope.getMoreLinks = function() {
    Links.getLinks()
      .then(function(data) {
        $scope.data.links = data;
      });
  };
  $scope.getMoreLinks()

});

/*
 visits: Number,
 link: String,
 title: String,
 code: String,
 base_url: String,
 url: String
*/
