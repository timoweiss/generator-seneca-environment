'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({


  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('seneca-environment') + ' generator!'
    ));

    var prompts = [{
      type: 'list',
      name: 'generator',
      message: 'What do you want?',
      default: 'system',
      choices: [
        {name: 'system', value: 'system'},
        {name: 'base only', value: 'base'},
        {name: 'service only', value: 'service'}]
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      if (this.props.generator === 'service') {
        this.composeWith('seneca-environment:service');
      } else if (this.props.generator === 'base') {
        // TODO: add base generator
      } else {
        this.composeWith('seneca-environment:service');
        // TODO: add base generator
      }
      done();
    }.bind(this));
  },

  writing: function () {
    // this.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );
  },

  install: function () {
    // this.installDependencies();
  }
});
