var app = angular.module('rtfm', ['firebase', 'ngRoute']);

app.constant('fb', {
  url: "https://rtfm2.firebaseio.com/"
})

app.config(function($routeProvider){

  $routeProvider
  .when('/threads', {
    templateUrl: 'app/threads/threadsTmpl.html',
    controller: 'threadsCtrl',
    resolve: {
      threadsRef: function(threadService){
        return threadService.getThreads();
      }
    }
  })
  .when('/threads/:threadId', {
    templateUrl: 'app/thread/threadTmpl.html',
    controller: 'threadCtrl',
    resolve: {
      threadRef: function(threadService, $route){
        return threadService.getThread($route.current.params.threadId);
      },
      commentsRef: function(threadService, $route){
        return threadService.getComments($route.current.params.threadId);
      }
    }
  })
  .otherwise({
    redirectTo: '/threads'
  })

});
