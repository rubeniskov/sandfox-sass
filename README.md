# SandFox SASS

---------------------------------------

[![Build Status][travis-image]][travis-url]
[![License][license-image]][license-url]

[![NPM][npm-image]][npm-url]

## What is SandFox SASS?

SandFox SASS is sass library.

**Note**: SandFox SASS requires a minimum [Node.js](https://nodejs.org/download/) version of `v0.12.0`.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sass --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

## Usage

Now you can type in your command line terminal the syntax to compile the library

```shell
$ npm run compile
```

Check if dist/sandfox.css and dis/sandfox.css.map are created and have fun!

## Documentation

Check out [sandfox.com](http://sass.sandfox.com/docs) for guides and documentation.

## Contributing

...


## Folder Structure

```text

src/ 
| 
|– base/ 
|   |
|   `– _base.scss
| 
|– components/
|   |
|   `– _components.scss
|
|– helpers/
|   |
|   |– variables/
|   |   |
|   |   `– _variables.scss
|   |
|   |– functions/
|   |   |
|   |   `– _functions.scss
|   |
|   |– mixins/
|   |   |
|   |   `– _mixins.scss
|   |
|   `– placeholders/
|       |
|       `– _placeholders.scss
| 
|– layout/
|   |
|   `– _layout.scss
| 
`– main.scss

```

## License

The MIT License (MIT)

Copyright (c) 2015 SandFox

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Credits

* [Rubén López Gómez](https://twitter.com/Rubeniskov)
* [Alberto Galán Álvarez](https://twitter.com/magicmoli1)

## Third-party

+ [mathsass](https://github.com/terkel/mathsass)

[site-url]: http://sass.sandfox.com

[npm-url]: https://www.npmjs.com/package/sandfox-sass
[npm-image]: https://nodei.co/npm/sandfox-sass.png?downloads=true

[travis-url]: https://travis-ci.org/foxnet-git/sandfox-sass?branch=master
[travis-image]: https://travis-ci.org/foxnet-git/sandfox-sass.svg?style=flat-square

[license-image]: http://img.shields.io/npm/l/sassdoc.svg?style=flat-square
[license-url]: LICENSE.md


