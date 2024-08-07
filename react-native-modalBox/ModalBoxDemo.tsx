import {
  ScrollView,
  Animated,
  Easing,
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

import React, {useState, useRef} from 'react';

import ModalBox from 'react-native-modalbox';

export const ModalBoxDemo = () => {
  const [isOpenVal, setIsOpenVal] = useState(false);
  const [isOpenVal1, setIsOpenVal1] = useState(false);
  const [isOpenVal2, setIsOpenVal2] = useState(false);
  const [isOpenVal3, setIsOpenVal3] = useState(false);
  const [isOpenVal4, setIsOpenVal4] = useState(false);
  const [isOpenVal5, setIsOpenVal5] = useState(false);
  const [isOpenVal6, setIsOpenVal6] = useState(false);
  const [isOpenVal7, setIsOpenVal7] = useState(false);
  const [isOpenVal8, setIsOpenVal8] = useState(false);
  const [isOpenVal9, setIsOpenVal9] = useState(false);
  const [isOpenVal10, setIsOpenVal10] = useState(false);
  const [isOpenVal11, setIsOpenVal11] = useState(false);
  const [isOpenVal12, setIsOpenVal12] = useState(false);
  const [isOpenVal13, setIsOpenVal13] = useState(false);
  const [isOpenVal14, setIsOpenVal14] = useState(false);
  const [isOpenVal15, setIsOpenVal15] = useState(false);
  const [isOpenVal16, setIsOpenVal16] = useState(false);
  const [isOpenVal17, setIsOpenVal17] = useState(false);
  const [isOpenVal18, setIsOpenVal18] = useState(false);
  const [isOpenVal19, setIsOpenVal19] = useState(false);
  const [isOpenVal20, setIsOpenVal20] = useState(false);
  const [isOpenVal21, setIsOpenVal21] = useState(false);
  const [isOpenVal22, setIsOpenVal22] = useState(false);
  const [isOpenVal23, setIsOpenVal23] = useState(false);
  const [isOpenVal24, setIsOpenVal24] = useState(false);

  const btnRef1 = useRef(null);

  const openModalBox = () => {
    btnRef1.current?.open();
  };
  const closeModalBox = () => {
    btnRef1.current?.close();
  };
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="属性">
          <TestCase itShould="点击按钮后打开弹框，点击‘close ModalBox’关闭弹框">
            <Button title="isOpen" onPress={() => setIsOpenVal(!isOpenVal)} />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal}
              coverScreen={true}>
              <Text style={[styles.modalText]}>Modal is open</Text>
              <Button
                title={'close ModalBox'}
                onPress={() => setIsOpenVal(!isOpenVal)}
              />
            </ModalBox>
          </TestCase>
          <TestCase itShould="点击按钮后弹框不出现">
            <Button
              title="isDisabled"
              onPress={() => setIsOpenVal1(!isOpenVal1)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal1}
              isDisabled={true}
              coverScreen={true}>
              <Text style={[styles.modalText]}>Modal is isDisabled</Text>
              <Button title={'close ModalBox'} />
            </ModalBox>
          </TestCase>
          <TestCase itShould="按下背景关闭模态">
            <Button
              title="backdropPressToClose"
              onPress={() => setIsOpenVal2(!isOpenVal2)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal2}
              coverScreen={true}
              backdropPressToClose={true}>
              <Text style={[styles.modalText]}>
                Close the the modal by pressing on the backdrop
              </Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="向下滑动关闭弹框">
            <Button
              title="swipeToClose"
              onPress={() => setIsOpenVal3(!isOpenVal3)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal3}
              coverScreen={true}
              swipeToClose={true}>
              <Text style={[styles.modalText]}>
                Close the the modal by swipe down
              </Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="向下滑动10px关闭弹框">
            <Button
              title="swipeThreshold"
              onPress={() => setIsOpenVal4(!isOpenVal4)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal4}
              coverScreen={true}
              swipeToClose={true}
              swipeThreshold={10}>
              <Text style={[styles.modalText]}>
                Close the the modal by swipe down 10px
              </Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="弹框左上方20X20px区域可滑动关闭弹框">
            <Button
              title="swipeArea"
              onPress={() => setIsOpenVal5(!isOpenVal5)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal5}
              coverScreen={true}
              swipeToClose={true}
              swipeArea={20}>
              <Text style={[styles.modalText]}>
                Close the the modal by swipe down swipeArea:20
              </Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="测试弹框的位置">
            <Button
              title="position:center"
              onPress={() => setIsOpenVal6(!isOpenVal6)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal6}
              coverScreen={true}
              backdropPressToClose={true}
              position={'center'}>
              <Text style={[styles.modalText]}>position is center</Text>
            </ModalBox>
            <Button
              title="position:bottom"
              onPress={() => setIsOpenVal7(!isOpenVal7)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal7}
              coverScreen={true}
              backdropPressToClose={true}
              position={'bottom'}>
              <Text style={[styles.modalText]}>position is bottom</Text>
            </ModalBox>
          </TestCase>

          <TestCase itShould="指定弹框的进入动画">
            <Button
              title="entry:top"
              onPress={() => setIsOpenVal8(!isOpenVal8)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal8}
              coverScreen={true}
              backdropPressToClose={true}
              entry={'top'}>
              <Text style={[styles.modalText]}>entry is top</Text>
            </ModalBox>
            <Button
              title="entry:bottom"
              onPress={() => setIsOpenVal9(!isOpenVal9)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal9}
              coverScreen={true}
              backdropPressToClose={true}
              entry={'bottom'}>
              <Text style={[styles.modalText]}>entry is bottom</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="取消弹框外部背景遮罩层显示">
            <Button
              title="backdrop"
              onPress={() => setIsOpenVal10(!isOpenVal10)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal10}
              coverScreen={true}
              backdropPressToClose={true}
              backdrop={false}>
              <Text style={[styles.modalText]}>backdrop is false</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="背景遮罩层透明度，设置为0.5">
            <Button
              title="backdropOpacity"
              onPress={() => setIsOpenVal11(!isOpenVal11)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal11}
              coverScreen={true}
              backdropPressToClose={true}
              backdropOpacity={0.5}>
              <Text style={[styles.modalText]}>backdropOpacity: 0.5</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="背景遮罩层颜色，设置为绿色">
            <Button
              title="backdropColor"
              onPress={() => setIsOpenVal12(!isOpenVal12)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal12}
              coverScreen={true}
              backdropPressToClose={true}
              backdropColor={'green'}>
              <Text style={[styles.modalText]}>backdropColor: 'green'</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="自定义的背景内容，背景会显示文字">
            <Button
              title="backdropContent"
              onPress={() => setIsOpenVal13(!isOpenVal13)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal13}
              coverScreen={true}
              backdropPressToClose={true}
              backdropOpacity={0.5}
              backdropContent={
                <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                  <Text style={{color: 'red', fontSize: 20}}>这是背景内容</Text>
                </View>
              }>
              <Text style={[styles.modalText]}>ModalBoxContent</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="弹框的打开和关闭动画持续时间，设置为1000ms">
            <Button
              title="animationDuration"
              onPress={() => setIsOpenVal14(!isOpenVal14)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal14}
              coverScreen={true}
              backdropPressToClose={true}
              animationDuration={1000}>
              <Text style={[styles.modalText]}>animationDuration:1000ms</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="设置弹框框的动画效果">
            <Button
              title="easing"
              onPress={() => setIsOpenVal15(!isOpenVal15)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal15}
              coverScreen={true}
              backdropPressToClose={true}
              easing={ModalBox.easing}>
              <Text style={[styles.modalText]}>
                easing: 使用预定义的easing函数
              </Text>
            </ModalBox>
            <Button
              title="easing:custom"
              onPress={() => setIsOpenVal16(!isOpenVal16)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal16}
              coverScreen={true}
              backdropPressToClose={true}
              easing={Easing.elastic(8)}>
              <Text style={[styles.modalText]}>easing: 自定义easing函数</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="没有动画，渲染后立即打开">
            <Button
              title="startOpen"
              onPress={() => setIsOpenVal18(!isOpenVal18)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal18}
              coverScreen={true}
              backdropPressToClose={true}
              startOpen={true}
              onClosed={() => console.log('Modal closed')}
              onOpened={() => console.log('Modal opened')}
              onClosingState={() => console.log('Modal closing state changed')}>
              <Text style={[styles.modalText]}>startOpen is true</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="设置弹框显示在最上层">
            <Button
              title="coverScreen"
              onPress={() => setIsOpenVal19(!isOpenVal19)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal19}
              coverScreen={true}
              backdropPressToClose={true}>
              <Text style={[styles.modalText]}>coverScreen is true</Text>
            </ModalBox>
          </TestCase>
          <TestCase itShould="设置弹框在键盘弹出时距离键盘顶部的偏移量">
            <Button
              title="keyboardTopOffset"
              onPress={() => setIsOpenVal20(!isOpenVal20)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal20}
              coverScreen={true}
              keyboardTopOffset={10}
              position={'bottom'}
              backdropPressToClose={true}>
              <Text style={[styles.modalText]}>keyboardTopOffset: 50</Text>
              <TextInput
                placeholder="text"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
              />
            </ModalBox>
          </TestCase>
          <TestCase itShould="使用原生驱动，提高动画性能">
            <Button
              title="useNativeDriver"
              onPress={() => setIsOpenVal21(!isOpenVal21)}
            />
            <ModalBox
              style={[styles.modal]}
              isOpen={isOpenVal21}
              coverScreen={true}
              easing={Easing.elastic(8)}
              useNativeDriver={true}
              backdropPressToClose={true}>
              <Text style={[styles.modalText]}>useNativeDriver is true</Text>
            </ModalBox>
          </TestCase>
        </TestSuite>
        <TestSuite name="事件">
          <TestCase
            itShould="打开弹框的事件"
            initialState={null as any}
            arrange={({setState}) => (
              <View>
                <Button
                  title="onOpened"
                  onPress={() => setIsOpenVal22(!isOpenVal22)}
                />
                <ModalBox
                  style={[styles.modal]}
                  isOpen={isOpenVal22}
                  coverScreen={true}
                  onOpened={setState(true)}>
                  <Text style={[styles.modalText]}>onOpened</Text>
                </ModalBox>
              </View>
            )}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="关闭弹框的事件"
            initialState={null as any}
            arrange={({setState}) => (
              <View>
                <Button
                  title="onClosed"
                  onPress={() => setIsOpenVal23(!isOpenVal23)}
                />
                <ModalBox
                  style={[styles.modal]}
                  isOpen={isOpenVal23}
                  coverScreen={true}
                  onClosed={setState(true)}>
                  <Text style={[styles.modalText]}>onClosed</Text>
                </ModalBox>
              </View>
            )}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="滑动关闭功能的状态改变事件"
            initialState={null as any}
            arrange={({setState}) => (
              <View>
                <Button
                  title="onClosingState"
                  onPress={() => setIsOpenVal24(!isOpenVal24)}
                />
                <ModalBox
                  style={[styles.modal]}
                  isOpen={isOpenVal24}
                  coverScreen={true}
                  onClosingState={setState(true)}>
                  <Text style={[styles.modalText]}>onClosingState</Text>
                </ModalBox>
              </View>
            )}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
          />
        </TestSuite>
        <TestSuite name="方法">
          <TestCase itShould="调佣方法打开和关闭弹框">
            <Button title="open" onPress={openModalBox} />
            <Button title="close" onPress={closeModalBox} />
            <ModalBox ref={btnRef1} style={[styles.modal]} coverScreen={true}>
              <Text style={[styles.modalText]}>ModalBox open</Text>
            </ModalBox>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

const styles = StyleSheet.create({
  input: {},
  modal: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    margin: 10,
    color: 'black',
  },
  module: {
    margin: 15,
  },
  moduleName: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 4,
    color: '#fff',
  },
  moduleContent: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#fff',
  },
  moduleButton: {
    // marginBottom: 4,
    backgroundColor: 'deepskyblue',
    height: 34,
    // borderRadius: 10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 32,
    verticalAlign: 'middle',
  },
});
