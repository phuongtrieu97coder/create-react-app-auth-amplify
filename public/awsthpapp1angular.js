var awsthpapp1var = angular.module("awsthpapp1",[]);
awsthpapp1var.controller("awsthpapp1controller1",function($scope,$http){
       $http({
              method:"GET",
              url:"car_list.json",
       }).then(
              function successs(response){
              $scope.car_list1 = response.data;
              },
              function error(response){
                     $scope.error_message = "There was an error loading data from your file!!!";
                     console.log(response.status);
                     console.log(response.statusText);
              }

       );
 
});
awsthpapp1var.directive("carinfoblock",function(){
return {
       restrict:"E",
       scope:{
            cardata1: "="
       },
       templateUrl:"index2.html"
}
});

