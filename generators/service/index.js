'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

    prompting: function () {
        var done = this.async();

        var prompts = [{
            type: 'input',
            name: 'serviceName',
            message: 'name your new service',
            default: 'service'
        }];

        this.prompt(prompts, function (props) {
            this.props = props;

            done();
        }.bind(this));
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('./**/*'),
            this.destinationPath('./' + this.props.serviceName),
            this.props
        );
    },

    end: function () {
        this.log('run \'cd ' + this.props.serviceName + ' && npm install\' to install your dependencies');
    }
});
