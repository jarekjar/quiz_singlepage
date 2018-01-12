angular.module("Quiz App")
    .service("FAQService", FAQService);

FAQService.$inject = ["$http"];

function FAQService($http){
    this.getCats = () => {
        return $http({
            method: 'GET',
            url: 'http://localhost:3024/api/getfaqcats',
            withCredentials: true
        });
    };


    this.post = (faq) => {
        return $http({
            method: 'POST',
            url: 'http://localhost:3024/api/faq',
            data: faq,
            withCredentials: true
        });
    };
}
    