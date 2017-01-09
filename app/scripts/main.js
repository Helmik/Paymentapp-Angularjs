'use strict';
// var app = angular.module('PaymentApp',['ngRoute']);
var app;
(function(){
	var a = angular.module('PaymentApp',[
		'ngRoute',
		'ngMaterial',

		'Users',
		'Layout'
	])
	.config(function($routeProvider) {
		// console.log(users);
		$routeProvider.when('/', {
		    controller: 'CreateUserCtrl',
		    templateUrl: 'scripts/Users/Views/createUser.html'
		});
  	})
  	.value("BACKEND",{
  		BASE_URL : "http://localhost",
  		PORT: 4200,
  		URL : function(){
  			return this.BASE_URL+":"+this.PORT;
  		}
  	})

  	app = a;

})();