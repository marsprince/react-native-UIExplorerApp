/**
 * @author brentvatne
 * @github https://github.com/brentvatne/react-native-scrollable-tab-view
 * @name CustomTabBar
 * @added marsprince
 */
'use strict';

var Platform = require('Platform');
var React = require('react-native');
var CustomTabBar=require('./components/CustomTabBar');
var {
  StyleSheet,
  Text,
  View,
} = React;

exports.title = '<CustomeTabBar>';
exports.description = 'Basic tabBar  ' +
  'show different pages.';

exports.displayName = 'CustomeTabBarExample';
exports.examples = [
  {
    title: 'Basic CustomeTabBar',
    render: function() {
      return (
        <CustomTabBar tabs={['test1','test2','test5']} activeTab='3'>
        </CustomTabBar>
      );
    },
  },
];
