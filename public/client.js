angular.module('namesApp', []);


angular.module('namesApp').controller('MainController', function($scope, $http){



$scope.getStudents= function(){
  $http.get('/students').then(function(response){
    console.log(response);
    $scope.students = response.data;
    return $scope.students;


  });

}

});
