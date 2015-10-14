/**
 * @author brentvatne
 * @github https://github.com/brentvatne/react-native-scrollable-tab-view
 * @name CustomTabBar
 * @edited marsprince
 */
'use strict';

var Platform = require('Platform');
var React = require('react-native');
var CustomTabBar=require('./components/CustomTabBar');
var TAB_BAR_REF = 'TAB_BAR';
var {
  StyleSheet,
  Text,
  View,
    ToastAndroid,
} = React;

var CustomTabBarExample= React.createClass({
  getInitialState(){
    return {
      currentPage: 0,
    };
  },
  _goToPage(pageNumber) {

    this.setState({currentPage: pageNumber});
    this.refs[TAB_BAR_REF].setAnimationValue(pageNumber);
  },
  render()
  {
    return(
    <CustomTabBar ref={TAB_BAR_REF} tabs={['test1','test2','test5']} activeTab={this.state.currentPage} goToPage={this._goToPage}>
    </CustomTabBar>
    )
  }
});
exports.title = '<CustomeTabBar>';
exports.description = 'Basic tabBar  ' +
  'show different pages.';

exports.displayName = 'CustomeTabBarExample';
exports.examples = [
  {
    title: 'Basic CustomeTabBar',
    render: function() {
      return (
        <CustomTabBarExample>
        </CustomTabBarExample>
      );
    },
  },
];
