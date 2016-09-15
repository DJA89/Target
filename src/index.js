import angular from 'angular';

import { HelloController } from './app/hello';
import { Example } from './app/services/example';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .controller('hello', HelloController)
  .service('Example', Example);
