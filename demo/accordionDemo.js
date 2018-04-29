var loadDependencies = ['ngCustomAccordion'];
var demoApp = angular.module("ngCustomAccordionDemo", loadDependencies);

demoApp.controller("depEmpCtrl", function($scope){
  $scope.deptList = [{"ID": 1, "Name": "IT", "colIndex": 1, "colorID" : "#493D26"},
             {"ID": 2, "Name": "Security", "colIndex": 1, "colorID" : "#C47451"},
             {"ID": 3, "Name": "Manufacturing", "colIndex": 2, "colorID" : "#E77471"},
             {"ID": 4, "Name": "Sales", "colIndex": 3, "colorID" : "#7D0552"},
             {"ID": 5, "Name": "Finance", "colIndex": "#2B547E"}];				   
  $scope.empList = [{"ID": 1, "Name": "abc1", "DeptID": 1, "Email": "abc1@email.com"},
            {"ID": 2, "Name": "abc2", "DeptID": 1, "Email": "abc2@email.com"},
            {"ID": 3, "Name": "abc3", "DeptID": 2, "Email": "abc3@email.com"},
            {"ID": 4, "Name": "abc4", "DeptID": 2, "Email": "abc4@email.com"},
            {"ID": 5, "Name": "abc5", "DeptID": 2, "Email": "abc5@email.com"},
            {"ID": 6, "Name": "abc6", "DeptID": 3, "Email": "abc6@email.com"},
            {"ID": 7, "Name": "abc7", "DeptID": 3, "Email": "abc7@email.com"},
            {"ID": 8, "Name": "abc8", "DeptID": 4, "Email": "abc8@email.com"},
            {"ID": 9, "Name": "abc9", "DeptID": 4, "Email": "abc9@email.com"}];
 });
