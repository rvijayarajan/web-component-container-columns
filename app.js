(function () {

 	var app = angular.module("main",['wcContainerColumns']);

	app.component("app", {
		templateUrl: 'app.html',
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {

		
		
	}

})();
