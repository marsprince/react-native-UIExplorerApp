/**
 * @author brentvatne
 * @github https://github.com/brentvatne/react-native-scrollable-tab-view
 * @name CustomTabBar
 * @edited marsprince
 */
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    } = React;

var deviceWidth = require('Dimensions').get('window').width;
var precomputeStyle = require('precomputeStyle');
var TAB_UNDERLINE_REF = 'TAB_UNDERLINE';
var TAB_MAIN= 'TAB_MAIN';

var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  tabs: {
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc',
  },
});

var CustomTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;

    return (
        <TouchableOpacity style={[styles.tab]}  key={name} onPress={() => this.props.goToPage(page)}>
            <Text style={{color: isTabActive ? 'navy' : 'black', fontWeight: isTabActive ? 'bold' : 'normal'}}>{name}</Text>
        </TouchableOpacity>
    );
  },

  setAnimationValue(value) {
      this.refs[TAB_MAIN].measure((ox, oy, width, height) => {
          this.refs[TAB_UNDERLINE_REF].setNativeProps(precomputeStyle({
              left: (width * value) / this.props.tabs.length
          }));
      });
  },
    componentDidMount() {
        setTimeout(this.measureHeader);
    },

    measureHeader() {
        this.refs[TAB_MAIN].measure((ox, oy, width, height) => {
            this.refs[TAB_UNDERLINE_REF].setNativeProps(precomputeStyle({
                width: width / this.props.tabs.length
            }));
        });
    },
  render() {
    var tabUnderlineStyle = {
      position: 'absolute',
      height: 4,
      backgroundColor: 'navy',
      bottom: 0,
    };

      return (
        <View>
            <View style={styles.tabs}  ref={TAB_MAIN}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
            <View style={tabUnderlineStyle} ref={TAB_UNDERLINE_REF} />
        </View>
    );
  },
});

module.exports = CustomTabBar;