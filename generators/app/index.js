'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Awesome! Create a jQuery Plugin with the ' + chalk.red('jQpg') + ' generator!'
        ));

        var prompts = [{
            name: 'pluginName',
            message: 'What is your plugin\'s name?'
        }, {
            name: 'fileName',
            message: 'What is your plugin\'s filename?'
        }];

        this.prompt(prompts, function(props) {
            this.props = props;
            done();
        }.bind(this));
    },

    writing: {
        app: function() {
            this.template("_plugin.js", this.props.fileName);
        }
    }
});