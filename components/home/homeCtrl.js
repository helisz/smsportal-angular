'use strict';

home.controller('homeCtrl', function ($scope) {

	/** products **/
	$scope.carousels = [
		{
			'name': 'Carousel Title',
			'description': 'Carousel Description.',
			'image': ''
		},
	];

	/** products **/
	$scope.products = [
		{
			'name': 'SMS Service',
			'description': 'CITIC Telecom International Enterprise SMS service provides an alternative way for companies to send and receive SMS without the need to invest in traditional telecommunications facilities or industry protocols for exchanging SMS messages.',
			'icon': 'img/product1.png'
		},
		{
			'name': 'IDD Voice Service',
			'description': 'As one Asia Pacific’s leading international telecommunications hubs, CITIC Telecom International provides circuit-switched voice service solutions to corporate customers via multiple international points-of-presence.',
			'icon': 'img/product2.png'
		},
		{
			'name': 'Data Centre',
			'description': 'CITIC Telecom International empowers today’s businesses with integrated co-location services at world-class Data Centres, the advanced facilities span some 90,000 sq. ft.',
			'icon': 'img/product3.png'
		},

	];

	/** cases **/
	$scope.cases = [

		{
			'name': 'Facebook',
			'sub': 'SMS Service',
			'a': '#',
			'img': 'img/case1.png',
			'description': 'CITIC Telecom provide a whole world coverage channel allow Facebook to enjoy SMS service',
		},
		{
			'name': 'Bank of China',
			'sub': 'SMS Service',
			'a': '#',
			'img': 'img/case2.png',
			'description': 'BOC Hong Kong batch send SMS via CITIC Telecom provided channel, meanwhile, CITIC Telecom provide a variety of customized report for BOC Hong Kong to analyze',
		},
		{
			'name': 'Cathay Pacific',
			'sub': 'SMS Service',
			'a': '#',
			'img': 'img/case3.png',
			'description': 'Cathay Pacific send SMS notification to customer timely that inform fight information.'
		},

	];
});
