angular.module("Quiz App")
    .service("LoginService", LoginService);

LoginService.$inject = ["$http"]

function LoginService(http){
    this.post = (profile) => {
        return http({
            method: 'POST',
            url: 'http://localhost:53268/api/users/login',
            data: profile
        });
    };
}