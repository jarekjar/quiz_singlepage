angular.module("Quiz App")
    .controller("HomeController", HomeController);

HomeController.$inject = ['UserService', '$state', '$window'];

function HomeController(us, $state, $window) {
    this.navbarHide = () => {
        if ($state.current.name === 'login' || $state.current.name === 'register') {
            return false;
        } else {
            return true;
        }
    };

    if ($state.current.name === 'home') {
        const promise = us.getUser();
        promise.then(
            response => {
                this.user = response.data.item.firstName + " " + response.data.item.lastName;
                this.welcome = true;
            },
            err => {
                Materialize.toast('No User Logged In', 2000, 'blue', function () {
                    $state.go('login');
                });
            }
            );
    }
    
    this.logout = () => {
        const promise = us.goLogout();
        promise.then(
            response => {
                console.log(response);
                Materialize.toast('Logging out..', 2000, 'blue', function () {
                    $state.go('login');
                });
            },
            err => {
                alert("you have failed me");
                console.log(err);
            }
        );
    };
}