(function () {
    angular.module("Quiz App")
        .controller("QuizController", QuizController);

    QuizController.$inject = ['$state']

    function QuizController($state) {
        this.goCreate = () => {
            $state.go('quizCreate')
        };
    }
})();