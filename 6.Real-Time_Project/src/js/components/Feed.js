/** @jsx React.DOM */

var React = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm = require('./FeedForm'),
    FeedList = require('./FeedList'),
    _ = require('lodash'),
    Firebase = require('firebase')
;

var Feed = React.createClass({
  loadData: function() {
    var ref = new Firebase('https://ngmanhvoteit.firebaseio.com/feed'),
        sorted = []
    ;

    ref.on('value', function(snap) {
      var items = [];
      snap.forEach(function(itemSnap) {
        item = itemSnap.val();
        item.key = itemSnap.key();
        items.push(item);
      });

      sorted = _.sortBy(items, function(item) {
        return -item.voteCount;
      });
      
      // if need sorted array
      // just replace items by sorted
      this.setState({
        items: items
      });
    }.bind(this));
  },
  componentDidMount: function() {
    this.loadData();
  },
  getInitialState: function() {
    return {
      items: [],
      formDisplayed: false
    };
  },
  onToggleForm: function() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },
  onNewItem: function(newItem) {
    var ref = new Firebase('https://ngmanhvoteit.firebaseio.com/feed');
    ref.push(newItem);

    // Close form
    this.setState({
      formDisplayed: false
    });
  },
  onVote: function(item) {
    var ref = new Firebase('https://ngmanhvoteit.firebaseio.com/feed').child(item.key);
    ref.update(item);
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
