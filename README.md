grunt-zshlint-darwin
-------------

Validate `.zshrc`, `.zsh` files.<br />
This plugin modified [grunt-zshlint](https://github.com/pine/grunt-zshlint) to work with macOS.

# Getting Started

### Dependency

Tested only zsh on Darwin(macOS) , so if you want to use script for another OS, see this [grunt-zshlint](https://github.com/pine/grunt-zshlint)

### This plugin requires 

[Grunt](http://gruntjs.com) 

- grunt-cli v1.4.3
- grunt v1.4.1 
- zsh

```sh
$ npm install git+https://github.com/Iovesophy/grunt-zshlint-darwin.git --save-dev
```

## Usage examples

```js
grunt.initConfig({
  zshlint: {
    files: ['**/*.zsh']
  }
});

grunt.loadNpmTasks('grunt-zshlint-darwin');
```

## Options
### force

Type: `Boolean` Default value: `false`

Set force to true to report errors but not fail the task.

## License
This software is released under the MIT License, see LICENSE. https://opensource.org/licenses/mit-license.php
