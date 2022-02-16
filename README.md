grunt-zshlint for macOS
-------------

Validate `.zshrc`, `.zsh` files.<br />
This plugin modified [grunt-zshlint](https://github.com/pine/grunt-zshlint) to work with macOS .
## Getting Started

This plugin requires [Grunt](http://gruntjs.com) >=0.4.5 and zsh.

```sh
$ npm install grunt-zshlint --save-dev
```

## Usage examples

```js
grunt.initConfig({
  zshlint: {
    files: ['**/*.zsh']
  }
});

grunt.loadNpmTasks('grunt-zshlint');
```

## Options
### force

Type: `Boolean` Default value: `false`

Set force to true to report errors but not fail the task.

## License
This software is released under the MIT License, see LICENSE. https://opensource.org/licenses/mit-license.php
