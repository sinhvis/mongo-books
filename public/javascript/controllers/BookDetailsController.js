(function() {
	"use strict";
	angular.module('app').controller('BookDetailsController', BookDetailsController) ;
	BookDetailsController.$inject = ['HomeFactory', '$state', '$stateParams'] ;

	function BookDetailsController(HomeFactory, $state, $stateParams) {
		var vm = this ;

		console.log("DEBUG: BookDetailsController called...") ;

		if(!$stateParams.id) {
			$state.go('Home') ;
		}
		else HomeFactory.getBook($stateParams.id).then(function(res) {
			console.log("DEBUG: HomeFactory.getBook called...") ;
			vm.book = res ;
		}) ;
	}
})() ;