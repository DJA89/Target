import angular from 'angular';

import { SignUpCtrl } from './app/sign_up/sign_up';
import { SignInCtrl } from './app/sign_in/sign_in';
import { MapHomeCtrl } from './app/map_home/map_home'
import { UserService } from './app/services/user_service';
import { localStorageServiceProvider } from '../node_modules/angular-local-storage/dist/angular-local-storage.js';
import { angularValidationMatch } from '../node_modules/angular-validation-match/dist/angular-validation-match.js';
import { AuthInterceptor } from './app/config/auth.interceptor.js';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'LocalStorageModule', 'validation.match'])
  .config(routesConfig)
  .controller('SignUpCtrl', SignUpCtrl)
  .controller('SignInCtrl', SignInCtrl)
  .controller('MapHomeCtrl', MapHomeCtrl)
  .service('UserService', UserService)
  .service('AuthInterceptor', AuthInterceptor)
  .constant('ENV', {
    'API_ENDPOINT': 'http://192.168.1.103:3010/api/v1/'
  })
  .config(function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('target');
  })
  .config(['$httpProvider', function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
  }]);
