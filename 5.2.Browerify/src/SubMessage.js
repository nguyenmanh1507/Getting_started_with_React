/** @jsx React.DOM */
var React = require('react');

var SubMessage = React.createClass({
  handleDelete: function() {
    this.props.onDelete(this.props.message);
  },
  propTypes: {
    message: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      message: 'Its good to see you'
    };
  },
  render: function() {
    return (
      <div>
        <small>{this.props.message}</small>
        <button className="btn btn-danger" onClick={this.handleDelete}>X</button>
      </div>
    );
  }
});

module.exports = SubMessage;
