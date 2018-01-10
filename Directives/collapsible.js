angular.module("Quiz App")
    .directive('sabioCollapse', SabioCollapse);

function SabioCollapse(){
    return function(scope, elem, attrs){
        elem.collapsible({
            accordian: true
        });
    };
}