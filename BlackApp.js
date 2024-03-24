import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const BlackApp = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#272727', height: winHeight * 1}}>
      <View
        style={{
          width: winWidth * 0.9,
          height: winWidth * 0.2,
          alignSelf: 'center',
          marginTop: winWidth * 0.05,
          flexDirection: 'row',
        }}>
        <View>
          <Image
            source={require('./2.png')}
            style={{
              height: winWidth * 0.1,
              width: winWidth * 0.1,
            }}
          />
        </View>

        <View
          style={{
            height: winWidth * 0.12,
            width: winWidth * 0.12,
            marginLeft: winWidth * 0.67,
            borderColor: '#AAAAAA',
            borderRadius: winWidth * 0.02,
            borderWidth: winWidth * 0.0025,
          }}>
          <Image
            source={require('./1.png')}
            style={{
              height: winWidth * 0.1,
              width: winWidth * 0.1,
              margin: winWidth * 0.01,
            }}
          />
        </View>
      </View>

      <View
        style={{
          width: winWidth * 0.85,
          height: winWidth * 0.7,
          alignSelf: 'center',
        }}>
        <View>
          <Text
            style={{
              color: '#F1F1F1',
              fontSize: winWidth * 0.06,
              fontWeight: '600',
            }}>
            Average Sleep
          </Text>
          <Text
            style={{
              color: '#717171',
              fontSize: winWidth * 0.035,
              fontWeight: '400',
              marginTop: winWidth * 0.01,
            }}>
            7 hours last week
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: winWidth * 0.6,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'column', alignSelf: 'flex-end'}}>
            <View
              style={{
                height: winWidth * 0.4,
                backgroundColor: '#A55232',
                width: winWidth * 0.045,
                borderRadius: winWidth * 0.05,
                shadowColor: 'black',
                shadowRadius: winWidth * 2,
                elevation: winWidth * 0.03,
                shadowOffset: {width: 1, height: 1},
              }}></View>
            <Text
              style={{
                color: '#6D6D6D',
                fontSize: winWidth * 0.035,
                fontWeight: '500',
                margin: winWidth * 0.01,
              }}>
              M
            </Text>
          </View>
          <View style={{flexDirection: 'column', alignSelf: 'flex-end'}}>
            <View
              style={{
                height: winWidth * 0.2,
                backgroundColor: '#A55232',
                width: winWidth * 0.045,
                borderRadius: winWidth * 0.05,
                shadowColor: 'black',
                shadowRadius: winWidth * 2,
                elevation: winWidth * 0.03,
                shadowOffset: {width: 1, height: 1},
              }}></View>
            <Text
              style={{
                color: '#6D6D6D',
                fontSize: winWidth * 0.035,
                fontWeight: '500',
                margin: winWidth * 0.01,
              }}>
              T
            </Text>
          </View>
          <View style={{flexDirection: 'column', alignSelf: 'flex-end'}}>
            <View
              style={{
                height: winWidth * 0.35,
                backgroundColor: '#A55232',
                width: winWidth * 0.045,
                borderRadius: winWidth * 0.05,
                shadowColor: 'black',
                shadowRadius: winWidth * 2,
                elevation: winWidth * 0.03,
                shadowOffset: {width: 1, height: 1},
              }}></View>
            <Text
              style={{
                color: '#6D6D6D',
                fontSize: winWidth * 0.035,
                fontWeight: '500',
                margin: winWidth * 0.01,
              }}>
              W
            </Text>
          </View>
          <View style={{flexDirection: 'column', alignSelf: 'flex-end'}}>
            <View
              style={{
                height: winWidth * 0.4,
                backgroundColor: '#A55232',
                width: winWidth * 0.045,
                borderRadius: winWidth * 0.05,
                shadowColor: 'black',
                shadowRadius: winWidth * 2,
                elevation: winWidth * 0.03,
                shadowOffset: {width: 5, height: 5},
              }}></View>
            <Text
              style={{
                color: '#6D6D6D',
                fontSize: winWidth * 0.035,
                fontWeight: '500',
                margin: winWidth * 0.01,
              }}>
              T
            </Text>
          </View>
          <View style={{flexDirection: 'column', alignSelf: 'flex-end'}}>
            <View
              style={{
                height: winWidth * 0.25,
                backgroundColor: '#A55232',
                width: winWidth * 0.045,
                borderRadius: winWidth * 0.05,
                shadowColor: 'black',
                shadowRadius: winWidth * 2,
                elevation: winWidth * 0.03,
                shadowOffset: {width: 1, height: 1},
              }}></View>
            <Text
              style={{
                color: '#6D6D6D',
                fontSize: winWidth * 0.035,
                fontWeight: '500',
                margin: winWidth * 0.01,
              }}>
              F
            </Text>
          </View>
          <View style={{flexDirection: 'column', alignSelf: 'flex-end'}}>
            <View
              style={{
                height: winWidth * 0.15,
                backgroundColor: '#A55232',
                width: winWidth * 0.045,
                borderRadius: winWidth * 0.05,
                shadowColor: 'black',
                shadowRadius: winWidth * 2,
                elevation: winWidth * 0.03,
                shadowOffset: {width: 1, height: 1},
              }}></View>
            <Text
              style={{
                color: '#6D6D6D',
                fontSize: winWidth * 0.035,
                fontWeight: '500',
                margin: winWidth * 0.01,
              }}>
              S
            </Text>
          </View>

          <View style={{flexDirection: 'column', alignSelf: 'flex-end'}}>
            <View
              style={{
                height: winWidth * 0.5,
                backgroundColor: '#A55232',
                width: winWidth * 0.045,
                borderRadius: winWidth * 0.05,
                shadowColor: 'black',
                shadowRadius: winWidth * 2,
                elevation: winWidth * 0.03,
                shadowOffset: {width: 1, height: 1},
              }}></View>
            <Text
              style={{
                color: '#6D6D6D',
                fontSize: winWidth * 0.035,
                fontWeight: '500',
                margin: winWidth * 0.01,
              }}>
              S
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: winWidth * 0.1,
            width: winWidth * 0.8,
            marginTop: winWidth * 0.08,
          }}>
          <View>
            <Text
              style={{
                color: '#F1F1F1',
                fontSize: winWidth * 0.04,
                fontWeight: '500',
                marginTop: winWidth * 0.02,
              }}>
              Sleep | Wake up
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#9E4F31',
              height: winWidth * 0.1,
              width: winWidth * 0.1,
              borderRadius: winWidth * 0.1,
              shadowColor: 'black',
              shadowRadius: winWidth * 2,
              elevation: winWidth * 0.03,
              shadowOffset: {width: 1, height: 1},
              marginLeft: winWidth * 0.45,
            }}>
            <Image
              source={require('./plus.png')}
              style={{
                height: winWidth * 0.035,
                width: winWidth * 0.035,
                margin: winWidth * 0.033,
              }}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#010101',
            height: winWidth * 0.002,
            width: winWidth * 0.85,
            marginTop: winWidth * 0.05,
            borderRadius: winWidth * 0.05,
            shadowColor: 'white',
            shadowRadius: winWidth * 0.01,
            elevation: winWidth * 0.003,
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: winWidth * 0.01,
          }}></View>

        <View>
          <View
            style={{
              marginTop: winWidth * 0.1,
              opacity:30,
              shadowOpacity:"#010101",
              backgroundColor: '#010101',
              height: winHeight * 0.12,
              width: winWidth * 0.85,
              borderRadius: winWidth * 0.05,
              shadowColor: 'black',
              shadowRadius: winWidth * 0.01,
              elevation: winWidth * 0.05,
              shadowOffset: {width: 5, height: 5},
              shadowOpacity: winWidth * 0.1,
            }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BlackApp;

const styles = StyleSheet.create({});
