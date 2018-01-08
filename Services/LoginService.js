angular.module("Quiz App")
    .service("LoginService", LoginService);

LoginService.$inject = ["$http"]

function LoginService(http){
    this.post = (profile) => {
        return http({
            method: 'POST',
            url: 'https://pacoima-ypi.azurewebsites.net/api/users/login/force',
            data: profile,
            withCredentials: true
        });
    };
}