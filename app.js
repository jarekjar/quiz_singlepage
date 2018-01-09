(function(){
    angular.module("Quiz App", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        const homeState = {
            name: 'home',
            url: '/home',
            templateUrl: 'home-page.html',
            controller: "HomeController"
        };
        const quizState = {
            name: 'quiz',
            url: '/quiz',
            templateUrl: 'quiz-page.html',
            controller: "QuizController"
        };
        const faqState = {
            name: 'faq',
            url: '/faq',
            templateUrl: 'faq-page.html',
            controller: "FAQIndexController" 
        };
        const createFaqState = {
            name: 'create',
            url: '/faq/create',
            templateUrl: 'faq-create.html',
            controller: 'FAQController'
        };      
        const loginState = {
            name: 'login',
            url: '/login',
            templateUrl: 'login-page.html',
            controller: "Login"
        };
        const registerState = {
            name: 'register',
            url: '/register',
            templateUrl: 'register-page.html',
            controller: "Register"
        };
        $urlRouterProvider.otherwise('home');
        $stateProvider.state(homeState);
        $stateProvider.state(quizState);
        $stateProvider.state(faqState);
        $stateProvider.state(loginState);
        $stateProvider.state(registerState);
        $stateProvider.state(createFaqState);
    });
})();