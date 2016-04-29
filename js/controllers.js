/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = 'Example user';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

};


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


