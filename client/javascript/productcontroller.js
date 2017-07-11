productApp.controller("ProductController", ["$scope", "GetProducts", function ($scope, GetProducts) {
    $scope.init = function()
    {
        //default values
        $scope.categoryType = 2;
        $scope.additonalType = 2;
        $scope.limit = 10;
        $scope.serviceDown = false;
    }
  
    $scope.Getproducts = function () {
        $scope.serviceDown = false;

        var request = {
            categoryType: $scope.categoryType,
            additionalType: $scope.additionalType,
            limit: $scope.limit
        }
        var getData = GetProducts.get(request);
        $scope.waiting = true;
        getData.then(function (response) {
            $scope.waiting = false;

            //get category 
            var categoryObj = response.data[0].categories;
            for (var key in categoryObj) {
                if (categoryObj.hasOwnProperty(key)) {
                    $scope.category = categoryObj[key];
                    break;
                }
            }

            //
            var ProductResponse = response.data;
            $scope.products = ProductResponse;
        }, function (err) {
            $scope.serviceDown = true;
            $scope.waiting = false;
        });
    }

    $scope.init();
    $scope.Getproducts();
}]);

productApp.factory("GetProducts", ["$http", function ($http)
{
    return{
        get:function(requestObj)
        {
            return $http.post('http://127.0.0.1:8000/app_dev.php/product/', JSON.stringify(requestObj))
        }
    }
}
]);