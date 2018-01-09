(function () {
    angular.module("Quiz App")
        .controller("Login", Login);

    Login.$inject = ["LoginService", '$timeout', '$state'];

    function Login(ls, timeout, $state) {

        timeout(function(){Materialize.updateTextFields()}); 

        this.goRegister = () => {
            $state.go("register");
        }

        this.userLogin = () => {
            if (this.myForm.$valid) {
                this.fade = true;
                this.errorMessage = "";
                const profile = {
                    email: this.email,
                    password: this.password
                };
                const promise = ls.post(profile)
                promise.then(
                    response => {
                        this.fade = false;
                        $state.go("home");
                    },
                    err => {
                        this.fade = false;
                        this.errorMessage = err.data.message
                    });
            } else {
                this.myForm.email.$touched = true;
                this.myForm.password.$touched = true;
            }
        }
    }
})();