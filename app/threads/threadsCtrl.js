var app = angular.module('rtfm');

app.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray){

  $scope.threads = $firebaseArray(threadsRef);

  $scope.threads.$loaded().then(function(threads){
    console.log(threads);
  })

  $scope.createThread = function(){
    $scope.threads.$add({
      username: $scope.user,
      title: $scope.title
    });
  }

})
