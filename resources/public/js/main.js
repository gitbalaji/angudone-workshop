"use strict";

var application = angular.module("myApp",[]).run(['$rootScope',function($rootScope){
     $rootScope.isArchitect = function(arch, dev){
      console.log("Architect =>" + arch);	
      console.log("Developer =>" + dev);	

      if(arch==true)
        return "Architect";
      else if(dev== true)
        return "Developer";

      return "____";
  }
   }]);

application.controller('TodosCtrl',[
	"$scope",
	"$http",
	"$log",
	function($scope,$http,$log){
	$scope.firstName = 'Balaji';
	$log.debug("FirstName is ", $scope.firstName);
}]);

application.controller('checkBoxController',[
	//this instead of $scope
	function(){
		var vm = this;
		vm.change = function(){
			console.log(vm.designation.architect);
		};
	}]);

application.controller('arrayController',[
	"TodoModels2",
	function(todoModels){
		var vm = this;
		vm.todos = todoModels.getTodos();
		vm.arr = [1,2,3];
		vm.markDone = todoModels.markDone;
		vm.addTodo = todoModels.addTodo;
	}]);

application.filter("reverse",[
		function(){
			return function(text, suffix){
				return text.split('').reverse().join('') + "->" + suffix;
			}
		}]);

application.factory("TodosModel", [
	function(){
		return {
			name : 'Raju'
		};
	}
	]);

application.service("TodoModels2",[
/*new */function(){
			var svc = this,
			index = 0,
			todos = [
		 	{id: ++index, text: "Learn Angular"},
		 	{id: ++index, text: "Teach it"},
		 	{id: ++index, text: "Profit !!!"}
			];
			svc.arr = [1,2,3];
			svc.getTodos = function(){
				return todos;
			}

			svc.markDone = function(todo){
				if(todo.done){
					delete todo.done;
				}
				else {
					todo.done = new Date().getTime();
				}
			}

			svc.addTodo = function(item){
				todos.push({id: ++index, text: item.text});
				item.text = '';
			}

		}
	]);