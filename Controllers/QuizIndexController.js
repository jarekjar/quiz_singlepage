(function () {
    angular.module("Quiz App")
        .controller("QuizIndexController", QuizIndexController);

    QuizIndexController.$inject = ['$state', 'QuizService'];

    function QuizIndexController($state, qs) {

        this.goCreate = () => {
            $state.go('quizCreate');
        };

        const promise = qs.getEmployeeId();
        promise.then(
            response => {
                qs.getQuizzes(response.data.item.employerId).then(
                    response => {
                        this.quizList = response.data.items;
                    },
                    err => {
                        Materialize.toast('Could not get quizzes, try again later', 2000, 'blue', function () {
                            $state.reload();
                        });
                    }
                );
            },
            err => {
                Materialize.toast('Could not get quizzes, try again later', 2000, 'blue', function () {
                    $state.reload();
                });
            }
        );


    }
})();