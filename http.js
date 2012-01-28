/**
 * Encode an object's properties into an URL encoded string.
 * @param {Object} object an object
 * @returns {String} a string containing the URL encoded properties of the object
 */
var urlEncode = exports.urlEncode = function(object) {
    var buf = new Buffer();
    var key, value;
    for (key in object) {
        value = object[key];
        if (value instanceof Array) {
            for (var i = 0; i < value.length; i++) {
                if (buf.length) buf.write("&");
                buf.write(encodeURIComponent(key), "=", encodeURIComponent(value[i]));
            }
        } else {
            if (buf.length) buf.write("&");
            buf.write(encodeURIComponent(key), "=", encodeURIComponent(value));
        }
    }
    return buf.toString();
}