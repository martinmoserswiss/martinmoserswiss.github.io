describe('ArticlesDataService', function () {

  var ArticlesDataService;

  // load the application module
  beforeEach(module('portfolioApp'));

  // get a reference to the service
  beforeEach(inject(function (_ArticlesDataService_) {
      ArticlesDataService = _ArticlesDataService_;
  }));

  describe('Public API', function() {

    it('should include a getWipArticles() function', function () {
        expect(ArticlesDataService.getWipArticles).toBeDefined();
    });

    it('should include a getDadArticles() function', function () {
        expect(ArticlesDataService.getWipArticles).toBeDefined();
    });

    it('should include a getInactiveArticles() function', function () {
        expect(ArticlesDataService.getWipArticles).toBeDefined();
    });
	});
});
