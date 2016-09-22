class SignInCtrl {
  constructor(UserService, localStorageService) {
    this.user = {};
    this.userService = UserService;
    this.localStorage = localStorageService;
    this.badRequest = false;
  }

  logInUser() {
    this.userService.logIn(this.user)
      .then((response) => {
        this.localStorage.set('token', response['data']['token']);
        this.badRequest = false;
      }, (response) => {
        this.badRequest = true;
      });
  }
}

export { SignInCtrl }
