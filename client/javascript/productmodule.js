var productApp = angular.module("ProductCatalogApp", []);

productApp.directive('infoBtn',function()
{
    return{
        restrict: 'A',
        link: function ($scope, elem, attr, ctrl) {
            $(elem).click(function () {
                
                $("#myModal").modal();
                //$scope.productDescription = $(elem).attr('data-desc');
               $('#myModal').find('p').html($(elem).attr('data-desc'));
            });
        }
    }
});

productApp.directive('toolTip', function () {
    return {
        restrict: 'A',
        link: function ($scope, elem, attr, ctrl) {
            $(document).ready(function () {
                $(elem).attr('title', $(elem).html());
                $(elem).tooltip();
            });
        }
    }
});