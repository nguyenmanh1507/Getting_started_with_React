/** @jsx React.DOM */

var React = require('react'),
    FeedItem = require('./FeedItem')
;

var FeedList = React.createClass({
  render: function() {
    var feedItems = this.props.items.map(function(item) {
      return (
        <FeedItem
          k={item.key}
          key={item.key}
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
