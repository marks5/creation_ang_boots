angular.module("Portfolio", ["ui.router"])
.run(function($rootScope){
	$rootScope.site = {
		nome : "Gabriel' Portfolio"
	}
})