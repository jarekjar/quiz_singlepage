angular.module("Quiz App")
    .controller("FAQIndexController", FAQIndexController);

FAQIndexController.$inject = ['FAQIndexService', 'UserService', 'FAQService', '$timeout', '$state'];

function FAQIndexController(fs, us, fss, timeout, $state) {
    $('#editMod').modal();
    const promise = fs.getFAQ();
    promise.then(
        response => {
            this.faqList = fs.sortFaq(response.data.items);
            $('.collapsible').collapsible({
                accordion: true
            });
        },
        err => {
            console.log("stuff");
        }
    );

    this.goCreate = () => {
        $state.go('create');
    }

    this.logout = () => {
        const promise = us.goLogout();
        promise.then(
            response => {
                Materialize.toast('Succesfully Logged Out!', 2000, 'blue', function () {
                    $state.go('login');
                });
            },
            err => {
                Materialize.toast(err, 2000, 'blue');
            }
        )
    }

    this.editFaq = (faqID, catID, question, answer, order, cat) => {
        console.log(order);
        const promise = fss.getCats();
        promise.then(
            response => {
                this.catList = response.data.items;
                console.log("catList")
                timeout(function () {
                    $('select').material_select();
                    Materialize.updateTextFields();
                });
            },
            err => {
                Materialize.toast('Could not recieve cats.', 2000, 'blue');
            }
        );
        this.question = question;
        this.answer = answer;
        this.order = parseInt(order);
        this.faqId = faqID;
        this.options = {
            id: catID
        };
    };

    this.update = () => {
        const faq = {
            id: this.faqId,
            faqCategoryID: this.options.id,
            question: this.question,
            answer: this.answer,
            displayOrder: this.order
        };
        console.table(faq);
        const promise = fs.putFaq(faq, this.faqId);
        promise.then(
            response => {
                Materialize.toast('FAQ has been edited!', 2000, 'blue', function () {
                    $state.reload();
                });
            },
            err => {
                Materialize.toast('FAQ could not be edited, try again later', 2000, 'blue', function () {
                    $state.reload();
                });
            }
        );
    };


    this.deleteFaq = (faqID) => {
        const promise = fs.deleteFaq(faqID);
        promise.then(
            response => {
                Materialize.toast('FAQ has been deleted!', 2000, 'blue', function () {
                    $state.reload();
                });
            },
            err => {
                Materialize.toast('FAQ could not be deleted, try again later', 2000, 'blue', function () {
                    $state.reload();
                });
            }
        );
    };
};