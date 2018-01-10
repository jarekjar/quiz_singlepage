angular.module("Quiz App")
    .controller("HomeController", HomeController);

HomeController.$inject = ['UserService', '$state'];

function HomeController(us, $state) {
    console.log($state.current);
    this.navbarHide = () => {
        if ($state.current.name === 'login' || $state.current.name === 'register') {
            return false;
        } else {
            return true;
        }
    };

    const getBack = us.getUserInfo();
    getBack.then(
        response => {
            console.log(response);
            this.myData = response.data;
        },
        err => {
            console.log("no response");
        }
    );

    if ($state.current.name === 'home') {
    const promise = us.getUser();
    promise.then(
        response => {
            this.user = response.data.item.firstName + " " + response.data.item.lastName;
            this.welcome = true;
        },
        err => {
            Materialize.toast('No User Logged In', 2000, 'blue', function () {
                //redirect to login page on getuser fail
                $state.go('login');
            });
        }
        );
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