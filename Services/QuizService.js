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
    this.postQuiz = (data) => {
        return $http({
            method: 'POST',
            url: 'https://pacoima-ypi.azurewebsites.net/api/quizzes/',
            data: data,
            withCredentials: true
        });
    };
    this.getQuizzes = (id) => {
        console.log(id);
        return $http({
            method: 'GET',
            url: 'https://pacoima-ypi.azurewebsites.net/api/quizzes/employer/' + id,
            withCredentials: true
        });
    };
}