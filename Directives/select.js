angular.module("Quiz App")
    .directive('sabioSelect', SabioSelect);

function SabioSelect(){
    return function(scope, elem, attrs){
        elem.material_select();
    };
}