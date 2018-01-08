angular.module("Quiz App")
    .service("FAQIndexService", FAQIndexService);

FAQIndexService.$inject = ["$http"]

function FAQIndexService(http) {
    this.getFAQ = () => {
        return http({
            method: 'GET',
            url: 'https://pacoima-ypi.azurewebsites.net/api/faqs/user',
            withCredentials: true
        });
    };

    this.sortFaq = (faq) => {
        faq.sort(orderByProperty('displayOrder', 'faqCategoryId'));
        let sortedFaq = {};
        for (let i = 0; i < faq.length; i++) {
            let cat = faq[i].category;
            if (sortedFaq.hasOwnProperty(cat)) {} else {
                sortedFaq[cat] = [];
            }
            sortedFaq[cat].push(faq[i])
        }
        return sortedFaq;
    }

    this.putFaq = (faq, id) => {
        return http({
            method: 'PUT',
            url: 'https://pacoima-ypi.azurewebsites.net/api/faqs/' + id,
            withCredentials: true,
            data: faq
        });
    };

    this.deleteFaq = (id) => {
        return http({
            method: 'DELETE',
            url: 'https://pacoima-ypi.azurewebsites.net/api/faqs/' + id,
            withCredentials: true
        });
    }


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