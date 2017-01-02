var expect = require('chai').expect;
var Sails = require('sails').Sails;

describe('sails.hook.mixins', function() {

	// Var to hold a running sails app instance
	var sails;

	// Before running any tests, attempt to lift Sails
	before(function (done) {

		// Hook will timeout in 10 seconds
		this.timeout(10000);

		// Attempt to lift sails
		Sails().lift({
			hooks: {
				'mixins': require('../'),
				'grunt': false
			},
			log: {
				level: 'error'
			}
		}, function (err, _sails) {
			if (err) return done(err);
			sails = _sails;
			return done();
		});
	});

	// After tests are complete, lower Sails
	after(function (done) {

		// Lower Sails (if it successfully lifted)
		if (sails) {
			return sails.lower(done);
		}
		// Otherwise just return
		return done();
	});

	it('should not crash sails on bootstrap', function() {
		return true;
	});

	it('should be accesible in sails.hooks', function () {
		expect(sails.hooks).to.have.ownProperty('mixins');
	});

	it('should be an object', function () {
		expect(sails.hooks.mixins).to.be.an.instanceof(Object);
	});

});