angular.module("Quiz App")
    .service("QuizService", QuizService);

QuizService.$inject = ["$http"];

function QuizService($http){
    this.getEmployeeId = () => {
        return $http({
            method: 'GET',
            url: 'https://pacoima-ypi.azurewebsites.net/api/users/ids',
            withCredentials: true
        });
    };
}