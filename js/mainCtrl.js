var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){


  $scope.getParseData = function(){
    parseService.getData().then(function(results){
      $scope.messages = results
    })
  }

$scope.postData = function(){
  parseService.postData($scope.message)
}


$scope.formatDate = function(dateString){
  return new Date(dateString).toLocaleString();
}


  setInterval(function(){
    $scope.getParseData();
  }, 1000)


})
