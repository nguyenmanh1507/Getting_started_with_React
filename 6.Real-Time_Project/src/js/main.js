/** @jsx React.DOM */

var React = require('react'),
    ReactDOM = require('react-dom'),
    Feed = require('./components/Feed')
;

var feedComponent = ReactDOM.render(<Feed />, document.getElementById('app'));
