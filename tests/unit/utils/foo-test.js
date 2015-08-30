/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import foo from 'ember-cli-example-app-for-github/utils/foo';

describe('foo', function() {
  it.only('should run', function() {
    var result = foo();
    expect(result).to.be.ok;
  });

  it('should not fun', function() {
    expect(true).to.be.false;
  });
});
