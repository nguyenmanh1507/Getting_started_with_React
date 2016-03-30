/** @jsx React.DOM */

var React = require('react'),
    FeedItem = require('./FeedItem')
;

var FeedList = React.createClass({
  render: function() {
    var feedItems = this.props.items.map(function(item) {
      return (
        <FeedItem
          id={item.id}
          title={item.title}
          description={item.description}
          voteCount={item.voteCount}
          onVote={this.props.onVote} />
      );
    }.bind(this));

    return (
      <ul className="list-group">
        {feedItems}
      </ul>
    );
  }
});

module.exports = FeedList;
