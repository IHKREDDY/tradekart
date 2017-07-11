describe('TestProductController', function () {
    // Import the module
    beforeEach(module('ProductCatalogApp'));

    //Inject the service you're testing (and other utils)
    var $httpBackend, $rootScope;
    var  GetProducts;


    //Inject GetProducts service & angular http mock
    beforeEach(inject(function (_$httpBackend_, _GetProducts_) {
        $httpBackend = _$httpBackend_;
        GetProducts = _GetProducts_;
    }));



    it("GetProducts service - test", function () {
        // build req object
        var request = {
            categoryType: '',
            additionalType: '',
            limit: ''
        }
        //condition
        $httpBackend.expect('POST', 'http://127.0.0.1:8000/app_dev.php/product/', request).respond(200);
        //call service
        GetProducts.get(request);
        //test
        expect($httpBackend.flush).not.toThrow();

    });
});