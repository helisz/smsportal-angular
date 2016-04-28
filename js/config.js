/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */

app.config(

	function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
		$urlRouterProvider.otherwise("/");

		$ocLazyLoadProvider.config({
			// Set to true if you want to see what and when is dynamically loaded
			debug: false
		});

		$stateProvider
			/*** HOME ***/
			.state('homepage', {
				url: "/",
				templateUrl: "components/home/homeView.html",
			})
		
			.state('store', {
				abstract: true,
				url: "/store",
        		defaultChild: 'store.landing',
				templateUrl: "components/store/content.html",
			})
		
			.state('store.landing', {
				url: "/",
				templateUrl: "components/store/storeLanding.html",
			})
		
			.state('store.all', {
				url: "/all",
				templateUrl: "components/store/storeAll.html",
			})
		
		
			/*** ADMIN ***/
			.state('admin', {
				abstract: true,
				url: "/admin",
				templateUrl: "components/admin/content.html",
			})
			.state('admin.dashboard', {
				url: "/dashboard",
				templateUrl: "components/admin/sections/dashboard.html",
				data: { pageTitle: 'Example view' }
			})
			.state('admin.function1', {
				url: "/function1",
				templateUrl: "components/admin/sections/function1.html",
				data: { pageTitle: 'Example view' }
			})
		})

	.run(function($rootScope, $state) {
	$rootScope.$state = $state;
});
