// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('FeedController', function($scope, $http) {
    // init a empty scope variable 
    $scope.posts = [];
    
    // set the feed url
    var url = "http://rss.cnn.com/rss/cnn_topstories.rss";
    // set the url to google, to convert the cml feed to json
    var google_converter = "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";

    // start the request
    $http.jsonp(google_converter+ encodeURIComponent(url))
      .then(function(res){
        // after the request is successful, pass 
        // the result to the view
        $scope.posts = res.data.responseData.feed.entries;
      });
});
