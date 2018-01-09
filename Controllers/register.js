angular.module("Quiz App")
    .controller("Register", Register);

Register.$inject = ["RegisterService", "$state"];

function Register(rs, $state) {
    this.captureReg = () => {
        if(this.myForm.$valid){
        this.errorMessage = "";
        this.fade = true;
        const profile = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        };
        const promise = rs.post(profile);
        promise.then(
            response => {
                this.fade = false;
                console.log(response);
                Materialize.toast('Succesfully Created User!', 2000, 'blue', function () {
                    $state.go('login');
                });
            },
            err => {
                this.fade = false;
                this.errorMessage = err.data.message || err.data.errors[0];
            });
        } else {
            this.myForm.firstName.$touched = true;
            this.myForm.lastName.$touched = true;
            this.myForm.email.$touched = true;
            this.myForm.password.$touched = true;
            this.myForm.rPassword.$touched = true;
        } 
    };
    this.login = () => {
        $state.go('login');
    };
}