/* jshint strict:false */
var Class = function () {};

Class.extend = function (def) {
	var constructor = def.constructor ? def.constructor : function () {};

	constructor.prototype = Object.create(this.prototype);
	constructor.prototype.constructor = constructor;

	constructor.super = this;
	constructor.extend = this.extend;

	for (var method in def) {
		if (method === 'statics') {
			var statics = def.statics;
			
			for (var staticMethod in statics) {
				constructor[staticMethod] = statics[staticMethod];
			}
		}
		else {
			constructor.prototype[method] = def[method];
		}
	}

	return constructor;
};

module.exports = Class;
