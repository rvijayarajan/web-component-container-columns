(function () {

 	var app = angular.module("wcContainerColumns",["wcContainerSimple"]);

	app.component("wcContainerColumns", {
		templateUrl: "container-columns.html",
		bindings: {
		},
		controller: "ContainerColumnsController"
	});

	app.controller("ContainerColumnsController", ContainerColumnsControllerFn);

	ContainerColumnsControllerFn.$inject = ["$scope"];

	function ContainerColumnsControllerFn($scope) {

		var vm = $scope.$ctrl;
	}

})();
