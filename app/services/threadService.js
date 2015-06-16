var app = angular.module('rtfm');

app.service('threadService', function(fb, $firebaseObject){

  this.getThreads = function(){
    return new Firebase(fb.url + '/threads');
  };

  this.getThread = function(id){
    return new Firebase(fb.url + '/threads/' + id)
  };

  this.getComments = function(id){
    return new Firebase(fb.url + '/threads/' + id + '/comments')
  };

});
