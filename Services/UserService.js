angular.module("Quiz App")
    .service("UserService", UserService);

UserService.$inject = ["$http"]

function UserService(http){

    this.getUser = () => {
        return http({
            method: 'GET',
            url: 'https://pacoima-ypi.azurewebsites.net/api/people/currentuser',
            withCredentials: true
        });
    };

    this.goLogout = () => {
        return http({
            method: 'GET',
            url: 'https://pacoima-ypi.azurewebsites.net/api/users/logout',
            withCredentials: true
        });
    }
}