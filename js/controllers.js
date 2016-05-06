/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */


app.controller('MainCtrl', function($scope){
	$scope.navs = [

		{
			'text': 'Product',
			'scroll': 'services',
			'a': '#services',
			'routeAnchor': '#/home#services'
		},
		{
			'text': 'Use Cases',
			'scroll': 'usecases',
			'a': '#usecases',
			'routeAnchor': '#/home#usecases'
		},
		{
			'text': 'About',
			'scroll': 'about',
			'a': '#about',
			'routeAnchor': '#/home#about'
		},
		{
			'text': 'Contact',
			'scroll': 'contact',
			'a': '#contact',
			'routeAnchor': '#/home#contact'
		}
	];
});


