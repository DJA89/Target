class SignUpCtrl {
  constructor(UserService, localStorageService) {
    this.user = {};
    this.user_service = UserService;
    this.badRequest = false;
  }

  createUser() {
    this.user_service.create(this.user)
    .then((response) => {
      alert('Created!');
    }, (response) => {
      this.badRequest = true;
    });
  }

}

export { SignUpCtrl }
