exports['Base 64'] = require('./base64');

if (require.main == module) {
	require('common-node').test.run(exports);
}
