class SignInCtrl {
  constructor(UserService, localStorageService) {
    this.user = {};
    this.userService = UserService;
    this.localStorage = localStorageService;
  }

  logInUser() {
    this.userService.logIn(this.user)
      .then((response) => {
        this.localStorage.set('token', response['data']['token']);
      }, function(response) {
        alert("Wrong credentials!");
      });
  }
}

export { SignInCtrl }
