(function () {
    angular.module("Quiz App")
        .controller("QuizController", QuizController);

    QuizController.$inject = ['$state', 'QuizService'];

    function QuizController($state, qs) {
        $('select').material_select();
        
        this.goCreate = () => {
            $state.go('quizCreate');
        };

        this.createQuiz = () => {
            const promise = qs.getEmployeeId();
            promise.then(
                response => {
                    const quizData = {
                        "quizName": this.quizName,
                        "defaultAnswerType": this.answerType,
                        "employerId": response.data.item.employerId
                      };
                    qs.postQuiz(quizData).then(
                        response => {
                            console.log(response);
                            Materialize.toast('Quiz has been added!', 2000, 'blue', function () {
                                $state.go('quiz');
                            });
                        },
                        err => {
                            Materialize.toast('Could not add quiz, try again later', 2000, 'blue', function () {
                                $state.reload();
                            });
                        }
                    );
                },
                err => {
                    Materialize.toast('Could not get employee ID, try again later', 2000, 'blue', function () {
                        $state.reload();
                    });
                }
            );
        };
    }
})();