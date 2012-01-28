/**
 * Returns an object for use as a HTTP header collection. The returned object
 * provides methods for setting, getting, and deleting its properties in a case-insensitive and
 * case-preserving way.
 *
 * This function can be used as mixin for an existing JavaScript object or as a constructor.
 * @param {Object} headers an existing JS object. If undefined, a new object is created
 */
var Headers = exports.Headers = function(headers) {
    // when is a duck a duck?
    if (headers && headers.get && headers.set) {
        return headers;
    }

    headers = headers || {};
    var keys = {};
    // populate internal lower case to original case map
    for (var key in headers) {
        keys[String(key).toLowerCase()] = key;
    }

    /**
     * Get the value of the header with the given name
     * @param {String} name the header name
     * @returns the header value
     * @name Headers.instance.get
     */
    Object.defineProperty(headers, "get", {
        value: function(key) {
            var value = this[key];
            if (value === undefined) {
                value = (key = keys[key.toLowerCase()]) && this[key];
            }
            return value;
        }
    });

    /**
     * Set the header with the given name to the given value.
     * @param {String} name the header name
     * @param {String} value the header value
     * @name Headers.instance.set
     */
    Object.defineProperty(headers, "set", {
        value: function(key, value) {
            // JSGI uses \n as separator for mulitple headers
            value = value.replace(/\n/g, "");
            var oldkey = keys[key.toLowerCase()];
            if (oldkey) {
                delete this[oldkey];
            }
            this[key] = value;
            keys[key.toLowerCase()] = key;
        }
    });

    /**
     * Add a header with the given name and value.
     * @param {String} name the header name
     * @param {String} value the header value
     * @name Headers.instance.add
     */
    Object.defineProperty(headers, "add", {
        value: function(key, value) {
            // JSGI uses \n as separator for mulitple headers
            value = value.replace(/\n/g, "");
            if (this[key]) {
                // shortcut
                this[key] = this[key] + "\n" + value;
                return;
            }
            var lowerkey = key.toLowerCase();
            var oldkey = keys[lowerkey];
            if (oldkey) {
                value = this[oldkey] + "\n" + value;
                if (key !== oldkey)
                    delete this[oldkey];
            }
            this[key] = value;
            keys[lowerkey] = key;
        }

    });

    /**
     * Queries whether a header with the given name is set
     * @param {String} name the header name
     * @returns {Boolean} true if a header with this name is set
     * @name Headers.instance.contains
     */
    Object.defineProperty(headers, "contains", {
        value: function(key) {
            return Boolean(this[key] !== undefined
                || (key = keys[key.toLowerCase()]) && this[key] !== undefined);
        }
    });

    /**
     * Unsets any cookies with the given name
     * @param {String} name the header name
     * @name Headers.instance.unset
     */
    Object.defineProperty(headers, "unset", {
        value: function(key) {
           key = key.toLowerCase();
            if (key in keys) {
                delete this[keys[key]]
                delete keys[key];
            }
        }
    });

    /**
     * Returns a string representation of the headers in MIME format.
     * @returns {String} a string representation of the headers
     * @name Headers.instance.toString
     */
    Object.defineProperty(headers, "toString", {
         value: function() {
            var buffer = new Buffer();
            for (var key in this) {
                this[key].split("\n").forEach(function(value) {
                    buffer.write(key).write(": ").writeln(value);
                });
            }
            return buffer.toString();
        }
    });

    return headers;
}

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