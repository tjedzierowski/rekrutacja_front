(() => {
	app.run(($httpBackend) => {
		$httpBackend.whenGET(/.json/).passThrough();
		$httpBackend.whenGET(/\/views\//).passThrough();
	});
})();

