let app = angular.module('Rekrutacja', [
	'ngMockE2E',
	'ngAnimate',
	'ui.router',
	'ui.bootstrap',
	'ngSanitize',
    'angularMoment'
]);

(() => {
	app.config(($compileProvider, $httpProvider, $locationProvider, $stateProvider, $provide, $urlRouterProvider) => {
		$compileProvider.debugInfoEnabled(true);

		$httpProvider.defaults.cache = true;

		$stateProvider
		.state('home', {
			url: '/home',
			views: {
				mainView: {templateUrl: './html/views/home.html'}
			}
		})

		.state('page1', {
			url: '/page1',
			views: {
				mainView: {templateUrl: './html/views/page1.html'}
			}
		})

		$urlRouterProvider.otherwise('/home');
	});
})();
