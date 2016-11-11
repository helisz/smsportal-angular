'use strict';

home.controller('homeCtrl', function ($scope, $http, $location) {

	$scope.PostDataResponse = "E";

	$scope.SendData = function () {

		var data = {
			type: 'normalSearch', 
			param: {
				effDate: '2015-04-01',
				expDate: '2099-12-31'
			},
			start: '0', 
			end: '100'
		}

		var url = "";
		for (var i in data) {
			if (data.hasOwnProperty(i)) {
				if (typeof data[i] != "object") {
					url = url.concat("&", i, "=",data[i]);
				}else{
					var innerdata = data[i];
					for (var j in innerdata) {
						if (innerdata.hasOwnProperty(j)){
							url = url.concat("&", j, "=",innerdata[j]);
						}
					}
				}
			}
		}

		url = $location.host() + "?" + url;


		var config = {
			headers : {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
			},
		}

		$http.post("/", data, config)
			.success(function (data, status, headers, config) {
			$scope.PostDataResponse = data;
			console.log(data);
		})
			.error(function (data, status, header, config) {
			$scope.ResponseDetails = "Data: " + data +
				"<hr />status: " + status +
				"<hr />headers: " + header +
				"<hr />config: " + config;
		});

	}


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
