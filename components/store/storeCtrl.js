'use strict';

store.controller('storeCtrl', function ($scope, $http) {

	// Fetch data from json file
	$http.get('json/products.json')
		.success(function(data) {
		$scope.dataField = data.dataField; 
		$scope.products = [];
		angular.forEach(data.dataField, function(field, index) {
			angular.forEach(field.productOfferPropDefs, function(product, index){
				$scope.products.push(product);
			});
		});
		
	});

});
