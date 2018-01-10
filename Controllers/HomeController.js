angular.module("Quiz App")
    .controller("HomeController", HomeController);

HomeController.$inject = ['UserService', '$state', '$window'];

function HomeController(us, $state, $window) {
    console.log($state.current);
    this.navbarHide = () => {
        if ($state.current.name === 'login' || $state.current.name === 'register') {
            return false;
        } else {
            console.log($window.localstorage);
            return true;
        }
    };

    if ($state.current.name === 'home') {
        if ($window.localstorage == null) {
            Materialize.toast('No User Logged In', 2000, 'blue', function () {
                //redirect to login page on getuser fail
                $state.go('login');
            });
        } else {
        this.user = $window.localstorage.firstName + " " + $window.localstorage.lastName;
        this.welcome = true;
        }
        // const promise = us.getUser();
        // promise.then(
        //     response => {
        //         this.user = response.data.item.firstName + " " + response.data.item.lastName;
        //         this.welcome = true;
        //     },
        //     err => {
        //         Materialize.toast('No User Logged In', 2000, 'blue', function () {
        //             //redirect to login page on getuser fail
        //             $state.go('login');
        //         });
        //     }
        //     );
    }
    this.logout = () => {
        const promise = us.goLogout();
        promise.then(
            response => {
                Materialize.toast('Succesfully Logged Out!', 2000, 'blue', function () {
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