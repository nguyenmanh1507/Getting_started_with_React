/** @jsx React.DOM */

var React = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm = require('./FeedForm'),
    FeedList = require('./FeedList'),
    _ = require('lodash')
;

var Feed = React.createClass({
  getInitialState: function() {
    var FEED_ITEMS = [
      {id: '1', title: 'Realtime data!', description: 'Firebase is cool', voteCount: 49},
      {id: '2', title: 'JavasScript is fun', description: 'Lexical scoping FTW', voteCount: 34},
      {id: '3', title: 'Coffee makes you awake', description: 'Drink responsibly', voteCount: 15}
    ];
    return {
      items: FEED_ITEMS,
      formDisplayed: false
    };
  },
  onToggleForm: function() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },
  onNewItem: function(newItem) {
    var newItems = this.state.items.concat([newItem]);
    this.setState({
      items: newItems,
      formDisplayed: false,
      key: this.state.items.length
    });
  },
  onVote: function(item) {
    var items = _.uniq(this.state.items),
        index = _.findIndex(items, function(feedItems) {
          return feedItems.id === item.id;
        })
    ;

    items[index] = item;

    this.setState({
      items: items
    });
  },
  render: function() {
    return (
      <div>
        <div className="container">
          <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
        </div>

        <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem} />

        <br />
        <br />

        <div className="container">
          <FeedList items={this.state.items} onVote={this.onVote} />
        </div>
      </div>
    );
  }
});

module.exports = Feed;
