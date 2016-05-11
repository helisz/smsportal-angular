'use strict';

store.controller('productCtrl', function ($scope, $http) {

	// Fetch data from json file
	$scope.promise = $http
		.get('json/products.json')
		.success(function(data) {
		$scope.dataField = data.dataField; 
		$scope.productList = [];
		angular.forEach(data.dataField, function(field, index) {
			angular.forEach(field.productOfferPropDefs, function(product, index){
				$scope.productList.push(product);
			});
		});

	});

	//	$scope.promise.then(function (data) {
	//		console.log($scope.productList);
	//	});


	$scope.text = "SCOPE_TEXT";
});



store.controller('productDetailCtrl', function ($scope, $stateParams, $filter) {
	$scope.$parent.promise.then(function (data) {
		angular.forEach($scope.productList, function(field, index) {

//			var str = "def Name Wakshina -- Dwt";
//			str = str.replace(/\s+/g, '-').toLowerCase();
//			console.log(str);

			if (field.defName == $stateParams.defName) {
				$scope.product = $scope.productList[index];
			}

		});
	});

});


