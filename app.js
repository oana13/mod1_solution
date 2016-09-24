(function(){
  'use strict';
  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.menu='';
    $scope.mess='';
    $scope.messColor='';
    $scope.checkMenu = function(){
      if($scope.menu.length!=0){
        var arrayOfFood = $scope.menu.split(',');
        var number = 0;
        for(var i=0; i<arrayOfFood.length; i++){
          if(arrayOfFood[i].trim().length!=0) {
            number++;
          }
        }
        if(number>3){
          $scope.mess = "Too much!";
          $scope.messColor='green';
        }
        else{
          $scope.mess = "Enjoy!";
          $scope.messColor='green';
        }
      }
      else{
        $scope.mess = "Please enter data first";
        $scope.messColor='red';
      }
    };
    $scope.sayMessage = function () {
      return $scope.mess;
    };
  };
})();
