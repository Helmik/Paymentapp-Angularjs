(function(){

	function usersServices($http,BACKEND){
		console.log(BACKEND);
	}

	angular.module("Users").service("UsersServices",["$http","BACKEND",usersServices]);
})();