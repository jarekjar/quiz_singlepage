angular.module("Quiz App")
    .service("FAQService", FAQService);

FAQService.$inject = ["$http"];

function FAQService($http){
    this.getCats = () => {
        return $http({
            method: 'GET',
            url: 'https://pacoima-ypi.azurewebsites.net/api/faqcategories',
            withCredentials: true
        });
    };


    this.post = (faq) => {
        return $http({
            method: 'POST',
            url: 'https://pacoima-ypi.azurewebsites.net/api/faqs',
            data: faq,
            withCredentials: true
        });
    };
}
    