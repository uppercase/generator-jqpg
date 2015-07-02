'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('jqpg:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ pluginName: 'myPluginName', fileName: 'my-plugin-filename.js' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'my-plugin-filename.js'
    ]);
  });
});
