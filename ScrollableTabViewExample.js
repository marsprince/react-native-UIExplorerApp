/**
 * @author brentvatne
 * @github https://github.com/brentvatne/react-native-scrollable-tab-view
 * @name CustomTabBar
 * @added marsprince
 */
'use strict';

var Platform = require('Platform');
var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var CustomTabBar=require('./components/CustomTabBar');
var {
  StyleSheet,
  Text,
  View,
    ScrollView,
} = React;
var deviceWidth = require('Dimensions').get('window').width;
exports.title = '<ScrollableTabView>';
exports.description = 'ScrollableTabView ' +
  'show different pages.';

exports.displayName = 'ScrollableTabView Example';
exports.examples = [
  {
    title: 'Basic ScrollableTabView ',
    render: function() {
        return (
            <ScrollableTabView renderTabBar={() => <CustomTabBar tabs={['test1','test2','test12']} />}>
                <ScrollView  style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>News</Text>
                    </View>
                </ScrollView>
                <ScrollView style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>Friends</Text>
                    </View>
                </ScrollView>
                <ScrollView  style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>Messenger</Text>
                    </View>
                </ScrollView>
                <ScrollView  style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>Notifications</Text>
                    </View>
                </ScrollView>
                <ScrollView  style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>Other nav</Text>
                    </View>
                </ScrollView>
            </ScrollableTabView>
        );
    },
  },
];
var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    tabView: {
        width: deviceWidth,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});