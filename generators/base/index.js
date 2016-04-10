'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('./**/*'),
      this.destinationPath('./base'),
      this.props
    );
  },

  end: function () {
    this.log();
    this.log('run \'cd base && npm install\' to install your dependencies');
    this.log();
  }
});
