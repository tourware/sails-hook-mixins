var deepExtend = require('deep-extend');

module.exports = function(sails) {

	return {
		initialize: function(done) {
			sails.after(['hook:moduleloader:loaded'], function() {
				_.each(sails.models, function (model) {
					// bind model additional attributes on concrete models and left derived model build from associations
					if (!model.globalId || !model.mixins) {
						return;
					}

					_.each(model.mixins, function (name) {
						var mixin = require(process.cwd() + '/api/mixins/' + name);
						deepExtend(model.attributes, mixin.attributes);

						if (typeof mixin.init === 'function') {
							mixin.init(model);
						}
					});
				});

				done();
			});
		}
	};

};