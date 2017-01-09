(function(){
	function createMenu(){

		function linker(scope){
			console.log("asdasdasdas");
			scope.menu = [
				{name: "aaaaaaa"},
				{name: "bbbbbbb"},
				{name: "ccccccc"},
				{name: "ddddddd"},
			];
		}

		return {
			restrict : "E",
			// scope : {}
			templateURL : "scripts/Misc/Menu/Views/menu.html",
			link : linker
		};
	}

	angular.module("Layout",[]).directive("dynamicMenu",createMenu);
})();