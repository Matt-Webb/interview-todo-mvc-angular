'use strict';
var devMachine = "http://localhost:8000/";
module.exports = {
	modrewrite:[
		'^/api/example '+devMachine+'mocks/api/example.json [P]'
	]
};
