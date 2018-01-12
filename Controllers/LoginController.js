(function () {
    angular.module("Quiz App")
        .controller("Login", Login);

    Login.$inject = ["LoginService", '$timeout', '$state', '$window'];

    function Login(ls, timeout, $state, $window) {

        timeout(function () {
            Materialize.updateTextFields()
        });

        this.goRegister = () => {
            $state.go("register");
        }

        this.userLogin = () => {
            if (this.myForm.$valid) {
                //this.fade = true;
                this.errorMessage = "";
                const profile = {
                    email: this.email,
                    password: this.password
                };
                Materialize.toast('Logging In...', 2000, 'blue', function () {
                
                const promise = ls.post(profile);
                promise.then(
                    response => {
                        //this.fade = false;
                            $state.go("home");
                        
                        console.log(response);

                    },
                    err => {
                        // this.fade = false;
                        this.errorMessage = err.data.message;
                        Materialize.toast(err.data.message, 3000, 'blue');
                    });
                });
            } else {
                this.myForm.email.$touched = true;
                this.myForm.password.$touched = true;
            }
        }
    }
})();