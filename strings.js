var binary = require("binary");
var Binary = binary.Binary, ByteString = binary.ByteString;

/**
 * Returns true if string starts with the given substring
 * 
 * @param {String}
 *          string the string to search in
 * @param {String}
 *          substring pattern to search for
 * @returns {Boolean} true in case it matches the beginning of the string, false
 *          otherwise
 */
var startsWith = exports.startsWith = function(string, substring) {
	return string.indexOf(substring) == 0;
};

/**
 * Returns true if string ends with the given substring
 * 
 * @param {String}
 *          string the string to search in
 * @param {String}
 *          substring pattern to search for
 * @returns Boolean true in case it matches the end of the string, false
 *          otherwise
 */
var endsWith = exports.endsWith = function(string, substring) {
	var diff = string.length - substring.length;
	return diff > -1 && string.lastIndexOf(substring) == diff;
};

/**
 * Encode a string or binary to a Base16 encoded string
 * 
 * @param {String|Binary}
 *          str a string or binary
 * @param {String}
 *          encoding optional encoding to use if first argument is a string.
 *          Defaults to 'utf8'.
 * @returns the Base16 encoded string
 */
var b16encode = exports.b16encode = function(str, encoding) {
	encoding = encoding || 'utf8';
	var input = str instanceof Binary ? str : String(str).toByteString(encoding);
	var length = input.length;
	var result = [];
	var chars = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B',
			'C', 'D', 'E', 'F' ];

	for( var i = 0; i < length; i++) {
		var n = input[i];
		result.push(chars[n >>> 4], chars[n & 0xf]);
	}
	return result.join('');
};

/**
 * Escape the string to make it safe for use within an HTML document.
 * 
 * @param {String}
 *          string the string to escape
 * @return {String} the escaped string
 */
var escapeHtml = exports.escapeHtml = function(string) {
	return string.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/>/g,
			'&gt;').replace(/</g, '&lt;');
};

/**
 * Calculates a message digest of a string. If no
 * argument is passed, the MD5 algorithm is used.
 * @param {String} string the string to digest
 * @param {String} algorithm the name of the algorithm to use
 * @returns {String} base16-encoded message digest of the string
 */
var digest = exports.digest = function(string, algorithm) {
	var algorithms = {
		md5: require("./md5").md5,
		sha1: require("./sha1").sha1
	};
	var md = algorithms[algorithm || 'md5'];
	return md(string).toUpperCase();
};

/**
 * Fills the string provided with the arguments.
 * @param {String} string the string to fill
 * @param {Object} args the arguments used to fill the string
 */
var fill = exports.fill = function(string, args) {
	if(!string) return;
	for(var key in args) {
		string = string.replace(new RegExp('\\{' + key + '\\}','g'), args[key]);
  }
	return string;	
}

/**
 * Returns true if string contains substring.
 * @param {String} string the string to search in
 * @param {String} substring the string to search for
 * @param {Number} fromIndex optional index to start searching
 * @returns true if str is contained in this string
 * @type Boolean
 */
var contains = exports.contains = function(string, substring, fromIndex) {
    fromIndex = fromIndex || 0;
    return string.indexOf(substring, fromIndex) > -1;
}
