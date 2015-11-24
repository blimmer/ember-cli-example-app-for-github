import BufferedProxy from 'ember-buffered-proxy/proxy';

// At this debugger, if you get BufferedProxy.initialState, it's null
// the `initialState` method defined in states/bar.js

BufferedProxy.reopenClass({
  initialState() {
    console.log('in foo service initializer');
    return {
      content: this.get('model1')
    };
  }
});

export default BufferedProxy.extend();
