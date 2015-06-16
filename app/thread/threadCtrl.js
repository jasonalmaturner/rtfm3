var app = angular.module('rtfm');

app.controller('threadCtrl', function($scope, $firebaseObject, threadRef, commentsRef, $firebaseArray){

  var thread = $firebaseObject(threadRef);

  thread.$bindTo($scope, 'thread');

  $scope.comments = $firebaseArray(commentsRef);

  $scope.createComment = function(){
    $scope.comments.$add({
      username: $scope.user,
      text: $scope.comment
    });
  };

})
