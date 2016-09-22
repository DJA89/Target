class SignUpCtrl {
  constructor(UserService, localStorageService) {
    this.user = {};
    this.user_service = UserService;
  }

  createUser() {
    this.user_service.create(this.user)
    .then(function(response) {
      alert('Created!');
    }, function(response){

    });
  }

}

export { SignUpCtrl }
