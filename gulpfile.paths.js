'use strict';

let baseLibsJs = [
	// libraries
	'node_modules/rx/dist/rx.all.min.js',

	// angular : libraries
	'node_modules/angular/angular.js',
	'node_modules/angular-ui-router/release/angular-ui-router.min.js',
	'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
	'node_modules/angular-sanitize/angular-sanitize.min.js',
	'node_modules/angular-translate/dist/angular-translate.min.js',
	'node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
	'node_modules/angular-loading-bar/build/loading-bar.min.js',
	'node_modules/angular-animate/angular-animate.min.js',
	'node_modules/angular-ui-router-anim-in-out/anim-in-out.js',
	'node_modules/rx-angular/dist/rx.angular.min.js',
	'node_modules/ng-webworker/src/ng-webworker.min.js',
    'node_modules/moment/moment.js',
    'node_modules/angular-moment/angular-moment.js',

	'js/app.js',
	'js/controllers/mainController.js',

];

let baseLibsJsNodeModules = baseLibsJs.filter((path) => { return path.startsWith('node_modules'); });

let baseLibsJsNotNodeModules = baseLibsJs.filter((path) => { return !path.startsWith('node_modules'); });

module.exports = {
	dev: {
		libs: {
			js: [
				...baseLibsJsNodeModules,

				// angular : mock
				'node_modules/angular-mocks/angular-mocks.js'
			]
		},
		app: {
			js: [
				...baseLibsJsNotNodeModules,

				// angular : mock
				'js/mocks/mock.js'
			]
		}
	},

	prod: {
		libs: {
			js: [
				...baseLibsJsNodeModules,
			]
		},
		app:{
			js: [
				...baseLibsJsNotNodeModules,
			]
		}
	}
};
