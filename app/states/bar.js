import BufferedProxy from 'ember-buffered-proxy/proxy';

// At this debugger, if you get BufferedProxy.initialState, it's null
// debugger;

BufferedProxy.reopenClass({
  initialState() {
    console.log('in bar service initializer');
    return {
      content: this.get('model2')
    };
  }
});

export default BufferedProxy.extend();
