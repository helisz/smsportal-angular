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
			// Home Page
			.state('homepage', {
				url: "/",
				templateUrl: "components/home/homeView.html",
			})
		
		
			// Login
			.state('user', {
				abstract: true,
				url: "",
				templateUrl: "components/login/content.html"
			})
		
			.state('user.login', {
                controller: 'LoginController',
				url: "/login",
				templateUrl: "components/login/loginView.html",
				controllerAs: 'vm'
			})
		
			.state('user.register', {
				controller: 'RegisterController',
				url: "/register",
				templateUrl: "components/login/registerView.html",
				controllerAs: 'vm'
			})
		
		
		
			// Static Pages
			.state('static' , {
				abstract: true,
				url: "",
				templateUrl: "components/static/content.html",
			})
		
			.state('static.aboutus', {
				url: "/about",
				templateUrl: "components/static/pages/aboutus.html",
			})
		
			// Store
			.state('store' , {
				abstract: true,
				url: "/store",
        		defaultChild: 'store.landing',
				templateUrl: "components/store/content.html",
				controller: "storeCtrl",
			})
		
			.state('store.landing', {
				url: "/",
				templateUrl: "components/store/storeLanding.html",
			})
		
			.state('store.all', {
				url: "/all",
				templateUrl: "components/store/storeAll.html",
			})
			
			// Product
			.state('product' , {
				abstract: true,
				url: "/product",
        		defaultChild: 'product.landing',
				templateUrl: "components/store/product.html",
				controller: "productCtrl",
			})
			
			.state('product.landing', {
				url: "/",
				templateUrl: "components/store/productLanding.html",
			})
		
			.state('product.detail', {
				url: "/:defName",
				templateUrl: "components/store/productDetail.html",
				controller: "productDetailCtrl",
			})
		
			// Admin Section
			.state('admin', {
				abstract: true,
				url: "/admin",
        		defaultChild: 'admin.dashboard',
				templateUrl: "components/admin/content.html",
			})
			.state('admin.dashboard', {
				url: "/dashboard",
				templateUrl: "components/admin/sections/dashboard.html",
				data: { pageTitle: 'Dashboard' }
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
