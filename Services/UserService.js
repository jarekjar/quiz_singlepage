angular.module("Quiz App")
    .service("UserService", UserService);

UserService.$inject = ["$http"]

function UserService(http){

    this.getUser = () => {
        return http({
            method: 'GET',
            url: 'http://localhost:3024/api/getuser',
            withCredentials: true
        });
    };

    this.goLogout = () => {
        return http({
            method: 'GET',
            url: 'http://localhost:3024/api/users/logout',
            withCredentials: true
        });
    };
}