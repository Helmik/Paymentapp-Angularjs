(function(){

	function createUser($scope,UsersServices){
		console.log("scope",$scope);
	}
	
	angular.module('Users',[]).controller("CreateUserCtrl",["$scope","UsersServices",createUser]);
})();