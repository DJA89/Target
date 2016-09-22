import { HttpInterceptor } from './http.interceptor';

class AuthInterceptor extends HttpInterceptor{
  constructor(localStorageService) {
    super();
    this.localStorage = localStorageService;
  }

  request(config){
    if(this.localStorage.get('token') !== null) {
      config.headers['X-USER-TOKEN'] = this.localStorage.get('token');
    }
    return config;
  }
}

export { AuthInterceptor }
