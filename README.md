# Common Utils

This package implements a number of pure JavaScript utility modules useful for server side development. It can be used with [all engines](http://wiki.commonjs.org/wiki/Implementations) implementing the  CommonJS [Modules/1.1](http://wiki.commonjs.org/wiki/Modules/1.1) and [Packages/1.0](http://wiki.commonjs.org/wiki/Packages/1.0) specifications. Common Utils strives to provide the fastest, leanest cross platform utilities implementation, so the code size is kept to a minimum while performance is optimized with the help of extensive benchmarks. The following modules are included:

* base64 - Base 64 encoding and decoding
* md5 - MD5 hashing

### Usage

First install the package via npm:

    npm install common-utils
    
To use the package in your module:

    var decode = require('common-utils/base64').decode;
    
For all the available modules and exports, check out the [documentation](http://oleg.github.com/common-utils/doc/). More info on how to use `require` is available in the [Node.js documentation](http://nodejs.org/docs/v0.5.5/api/modules.html).


### Tests

You will need to globally install [common-node](http://oleg.github.com/common-node/) via npm to run the tests.

To run the unit tests:

    node test/all.js

You can also run individual tests, for example:

 	node test/base64.js
     
### Benchmarks

Benchmarks will be added to `/benchmarks`

### Contributing

To contribute to this project, you can start by trying to run the tests on your system and posting any failures on the issue tracker. It is advised that you use the version in master for doing this, which you can install via:

    npm install -g https://github.com/olegp/common-utils/tarball/master

If you run into any issues along the way, whether related to using this library
in your own project or to the documentation, please post your comments on the [issue tracker](https://github.com/olegp/common-utils/issues/). The tracker is also a great place to contribute ideas and find out what needs doing.

To find specific issues not listed on the tracker, you can run the following command from inside the `common-utils` directory.

    grep 'TODO' lib/*  

To contribute code: fork the project, make and commit your changes and send a pull request.

Modules currently planned for includes are listed on the [wiki](http://github.com/olegp/common-utils/wiki/).

### Acknowledgements

  * [dsowsy](https://github.com/dsowsy) for pointing out that base64 needs to be refactored out of `common-node`
    
### License 

(The MIT License)

Copyright (c) 2011 Oleg Podsechin

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.