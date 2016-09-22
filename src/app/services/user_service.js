class UserService {
  constructor($http, ENV) {
    this.http = $http;
    this.env = ENV;
  }

  create(user) {
    return this.http.post(`${this.env.API_ENDPOINT}users`, { user: user });
  }

  logIn(user) {
    return this.http.post(`${this.env.API_ENDPOINT}users/sign_in`, { user: user })
  }
}

export { UserService }
