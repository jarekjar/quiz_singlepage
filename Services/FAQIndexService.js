angular.module("Quiz App")
    .service("FAQIndexService", FAQIndexService);

FAQIndexService.$inject = ["$http"]

function FAQIndexService($http) {
    const urlStart = 'https://pacoima-ypi.azurewebsites.net/api/';
    this.getFAQ = (id) => {
        return $http({
            method: 'GET',
            url: 'http://localhost:3024/api/faq/' + id,
            withCredentials: true
        });
    };

    this.sortFaq = (faq) => {
        console.log(faq);
        faq.sort(orderByProperty('displayOrder', 'faqCategoryId'));
        const sortedFaq = {};
        for (let i = 0; i < faq.length; i++) {
            const cat = faq[i].category;
            if (!sortedFaq.hasOwnProperty(cat)) {
                sortedFaq[cat] = [];
            }
            sortedFaq[cat].push(faq[i]);
        }
        console.log(sortedFaq);
        return sortedFaq;
    }

    this.putFaq = (faq) => {
        return $http({
            method: 'PUT',
            url: 'http://localhost:3024/api/faq',
            withCredentials: true,
            data: faq
        });
    };

    this.deleteFaq = (id) => {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:3024/api/faq/' + id,
            withCredentials: true,
            data: id
        });
    }

    // I stole the code from http://www.growingwiththeweb.com/2014/07/order-a-js-array-by-multiple-properties.html
    function orderByProperty(prop) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function (a, b) {
          var equality = a[prop] - b[prop];
          if (equality === 0 && arguments.length > 1) {
            return orderByProperty.apply(null, args)(a, b);
          }
          return equality;
        };
      }
}