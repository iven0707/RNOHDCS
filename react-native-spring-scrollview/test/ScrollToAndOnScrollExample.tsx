import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Animated,
  ScrollView,
} from 'react-native';
import {SpringScrollView} from 'react-native-spring-scrollview';

const AnimatedSpringScrollView = Animated.createAnimatedComponent(SpringScrollView);
export default class ScrollToAndOnScrollExample extends React.Component {
  _contentCount = 20;
  _scrollView;
  _nativeOffset = {
    y: new Animated.Value(0),
  };

  render() {
    const arr = [];
    for (let i = 0; i < this._contentCount; ++i) arr.push(i);
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.scrollTo} onPress={this._scrollTo}>
          <Text>Tap to ScrollTo y=200</Text>
        </TouchableOpacity>
        <SpringScrollView
          style={styles.container}
          ref={(ref) => (this._scrollView = ref)}
          onTouchBegin={this._onTouchBegin}
          onTouchFinish={this._onTouchEnd}
          onMomentumScrollBegin={this.onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          onNativeContentOffsetExtract={this._nativeOffset}
          onScroll={this._onScroll}
          bounces={true}
          onSizeChange={this._onSizeChange}
          onContentSizeChange={this._onContentSizeChange}
          >
          {arr.map((i, index) => (
            <Text key={index} style={styles.text}>
              Scroll and Look up the console log to check if
              'onScroll','onTouchBegin','onTouchEnd','onMomentumScrollBegin' and
              'onMomentumScrollEnd' work well!
            </Text>
          ))}
          <Animated.View style={this._stickyHeaderStyle}>
            <Text>Test `onNativeContentOffsetExtract`</Text>
          </Animated.View>
        </SpringScrollView>
      </View>
    );
  }

  _stickyHeaderStyle = {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    transform: [{translateY: this._nativeOffset.y}],
  };


  _onSizeChange= (wh) => {
    console.log('_onSizeChange wh:'+JSON.stringify(wh));

  };

  _onContentSizeChange= (wh) => {
    console.log('_onContentSizeChange wh:'+JSON.stringify(wh));

  };


  _onScroll = offset => {
    console.log("_onScroll", offset.nativeEvent);
  };

  _scrollTo = () => {
    if (this._scrollView) {
      this._scrollView
        .scrollTo({x: 0, y: 200})
        .then(() => console.log('ScrollTo has finished'));
    }
  };

  _onTouchBegin = () => {
    console.log('onTouchBegin');
  };

  _onTouchEnd = () => {
    console.log('onTouchEnd');
  };

  onMomentumScrollBegin = () => {
    console.log('onMomentumScrollBegin');
  };
  _onMomentumScrollEnd = () => {
    console.log('onMomentumScrollEnd');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:300
  },
  scrollTo: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: 'gray',
    zIndex: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    margin: 20,
  },
});