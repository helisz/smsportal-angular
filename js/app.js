var app = angular.module('smsapp', [
        'ui.router',
        'oc.lazyLoad',
        'ui.bootstrap',
		'ngCookies',
		'ngCart',
		
		'smsapp.home',
		'smsapp.store',
		'smsapp.admin',
	
		'smsapp.login',
		'smsapp.register',
		'smsapp.forgetpw',
	
		'duScroll'

]);


var home = angular.module('smsapp.home', []);
var store = angular.module('smsapp.store', []);
var admin = angular.module('smsapp.admin', []);
var login = angular.module('smsapp.login', []);
var register = angular.module('smsapp.register', []);
var forgetpw = angular.module('smsapp.forgetpw', []);

app.run(function($rootScope){

	$rootScope.$on('$stateChangeSuccess',function(){
		$("html, body").animate({ scrollTop: 0 }, 200);
	}) 
	//the above code here
});


app.run(['$rootScope', '$location', '$cookieStore', '$http',
    function($rootScope, $location, $cookieStore, $http ) {

        $rootScope.globals = $cookieStore.get('globals') || {};
		
        if ($rootScope.globals.currentUser) {
			console.log("logined");
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
            //if($location.hash()) $anchorScroll();
        });

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;

         //   if (restrictedPage && !loggedIn) {
          //      $location.path('/login');
           // }
        });
    }
]);