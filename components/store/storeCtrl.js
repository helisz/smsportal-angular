'use strict';

store.controller('storeCtrl', function ($scope) {
	
	$scope.landingSlider = [
		{
			'name': 'slider-1',
			'url': ''
		},
		{
			'name': 'slider-2',
			'url': ''
		},
	];
	
	$scope.products = [

	  {
		 'name': 'China 5000 SMS Plan',
		 'type': 'SMS Packages',
		 'desc': 'Cover mainland China all mobile network operators channels.',
		 'price': '59',
		 'pic': 'img/cn1.jpg',
		 'region': 'cn',
	  },

	  {
		 'name': 'China 10000 SMS Plan',
		 'type': 'SMS Packages',
		 'desc': 'Cover mainland China all mobile network operators & mobile virtual network operators channels',
		 'price': '99',
		 'pic': 'img/cn2.jpg',
		 'region': 'cn',
	  },

	  {
		 'name': 'China 20000 SMS Plan',
		 'type': 'SMS Packages',
		 'desc': 'Cover mainland China all mobile network operators channels',
		 'price': '199',
		 'pic': 'img/cn3.jpg',
		 'region': 'cn',
	  },

	  {
		 'name': 'Korea 5000 SMS Plan',
		 'type': 'SMS Packages',
		 'desc': 'Cover Korea all mobile network operators channels',
		 'price': '199',
		 'pic': 'img/kr1.jpg',
		 'region': 'kr',
	  },

	  {
		 'name': 'Korea 10000 SMS Plan',
		 'type': 'SMS Packages',
		 'desc': 'Cover Korea all mobile network operators channels',
		 'price': '299',
		 'pic': 'img/kr2.jpg',
		 'region': 'kr',
	  },

	  {
		 'name': 'Japan SMS [10000 Plan] ',
		 'type': 'SMS Packages',
		 'desc': 'Cover Japan all mobile network operators channels',
		 'price': '199',
		 'pic': 'img/jp1.jpg',
		 'region': 'jp',
	  }
   ];
	
	
	
});
