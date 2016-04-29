var app = angular.module('smsapp', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
	
		'smsapp.home',
		'smsapp.store',
	
		'duScroll'

]);


var home = angular.module('smsapp.home', []);

var store = angular.module('smsapp.store', []);

// var home = angular.module('smsapp.home', ['ngAnimate']);

// var store = angular.module('smsapp.store', ['ngAnimate']);

//var doc = angular.module('smsapp.doc', ['ngRoute', 'ngAnimate']);

//var login = angular.module('smsapp.login', ['ngRoute', 'ngAnimate']);

//var register = angular.module('smsapp.register', ['ngRoute', 'ngAnimate']);

//var forgetpw = angular.module('smsapp.forgetpw', ['ngRoute', 'ngAnimate']);



app.run(function($rootScope){

	$rootScope.$on('$stateChangeSuccess',function(){
		$("html, body").animate({ scrollTop: 0 }, 200);
	}) 
	//the above code here
})