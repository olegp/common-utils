/**
 * Returns true if string starts with the given substring
 * @param {String} string the string to search in
 * @param {String} substring pattern to search for
 * @returns {Boolean} true in case it matches the beginning
 *            of the string, false otherwise
 */
var startsWith = exports.startsWith = function(string, substring) {
    return string.indexOf(substring) == 0;
}

/**
 * Returns true if string ends with the given substring
 * @param {String} string the string to search in
 * @param {String} substring pattern to search for
 * @returns Boolean true in case it matches the end of
 *            the string, false otherwise
 */
var endsWith = exports.endsWith = function(string, substring) {
    var diff = string.length - substring.length;
    return diff > -1 && string.lastIndexOf(substring) == diff;
}