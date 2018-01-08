angular.module("Quiz App")
    .controller("HomeController", HomeController);

HomeController.$inject = ['UserService', '$state']

function HomeController(us, $state) {
    const promise = us.getUser();
    promise.then(
        response => {
            this.user = response.data.item.firstName + " " + response.data.item.lastName
            this.welcome = true;
        },
        err => {
            Materialize.toast('No User Logged In', 2000, 'blue', function () {
                $state.go('login');
            });
        }
    )
    this.logout = () => {
        const promise = us.goLogout();
        promise.then(
            response => {
                Materialize.toast('Succesfully Logged Out!', 2000, 'blue', function () {
                    $state.go('login');
                });
            },
            err => {
                alert("you have failed me")
                console.log(err);
            }
        )
    }
};