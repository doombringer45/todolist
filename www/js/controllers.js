angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicModal, $window, $timeout) {

$ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
   
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });


  $scope.taskItem = {item:""};

  $scope.items = JSON.parse(window.localStorage.getItem("todoItem")) || [];



  $scope.saveItem = function(item){

    var a = $window.localStorage.getItem("todoItem") ;
    a = JSON.parse(a) || [];
      console.log(a);
    a.push(item);
    $window.localStorage.setItem("todoItem", JSON.stringify(a));
   
    $timeout(function(){
        $scope.$apply(function( ){
        $scope.items = a; 
         $scope.taskItem = {item:""};
    });

    })
  
    $scope.modal.hide();

  }

  $scope.clear = function(){

   
    $timeout(function(){
        $scope.$apply(function( ){
        $scope.items = []; 
        $window.localStorage.clear();
    });

    })
  



  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
