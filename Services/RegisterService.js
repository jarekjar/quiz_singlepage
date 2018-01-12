angular.module("Quiz App")
    .service("RegisterService", RegisterService);

RegisterService.$inject = ["$http"]

function RegisterService(http){

    this.post = (profile) => {
        return http({
            method: 'POST',
            url: 'http://localhost:3024/api/register',
            data: profile
        });
    };
}