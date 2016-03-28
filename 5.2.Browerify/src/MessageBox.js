/** @jsx React.DOM */
var React = require('react'),
    SubMessage = require('./SubMessage')
;

var MessageBox = React.createClass({
  handleAdd: function(e) {
    var newMessage = this.refs.newMessage.getDOMNode().value;
    this.setState({
      messages: this.state.messages.concat(newMessage)
    });
  },
  handleDelete: function(message) {
    var newMessages = _.without(this.state.messages, message);
    this.setState({
      messages: newMessages
    });
  },
  getInitialState: function() {
    return {
      isVisible: true,
      messages: [
        'I like the word',
        'Coffee flavored ice cream is highly underrated',
        'My spoon is too big',
        'Tuesday is coming. Did you bring your coat?',
        'I am a banana'
      ]
    }
  },
  render: function() {
    var inlineStyle = {
      display: (this.state.isVisible) ? 'block' : 'none'
    };
    var message = this.state.messages.map(function(i) {
      return (
        <SubMessage message={i} onDelete={this.handleDelete} />
      );
    }.bind(this));
    var subMessage = 'Its not good to see you';
    return (
      <div className="container jumbotron" style={inlineStyle}>
        <h1>Hello, React</h1>
        <input type="text" ref="newMessage" />
        <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
        {message}
      </div>
    );
  }
});

module.exports = MessageBox;
