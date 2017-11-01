import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'ember-cli-example-app-for-github/tests/helpers/start-app';
import destroyApp from 'ember-cli-example-app-for-github/tests/helpers/destroy-app';

describe('Acceptance | cookie route', function() {
  let application;

  beforeEach(function() {
    application = startApp();
    Cookies.remove('somecookie');
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /cookie-route', function() {
    expect(Cookies.get('somecookie')).to.be.undefined;
    visit('/cookie-route');

    return andThen(() => {
      expect(Cookies.get('somecookie')).to.equal('foobar');
    });
  });
});
