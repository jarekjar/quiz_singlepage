angular.module("Quiz App")
    .service("RegisterService", RegisterService);

RegisterService.$inject = ["$http"]

function RegisterService(http){

    this.post = (profile) => {
        return http({
            method: 'POST',
            url: 'https://pacoima-ypi.azurewebsites.net/api/users/register/employer',
            data: profile,
            withCredentials: true
        });
    };
}