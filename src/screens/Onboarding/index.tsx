/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {WithoutLoginStackList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type OnBoardingScreenNavigationProps = NativeStackNavigationProp<
  WithoutLoginStackList,
  'Onboarding'
>;

type Props = {navigation: OnBoardingScreenNavigationProps};

const OnboardingScreens: React.FC<Props> = ({navigation}) => {
  const OnBoardingRef = useRef<Onboarding>(null);

  const NextPress = () => {
    OnBoardingRef.current?.goNext();
  };
  const CompleteOnBoarding = () => {
    navigation.navigate('Auth');
  };
  const CustomDot = () => {
    return <View style={{display: 'none'}} />;
  };

  const NextButton = () => (
    <Pressable style={styles.buttonStyle} onPress={NextPress}>
      <Text style={styles.buttonTextStyle}>NEXT</Text>
    </Pressable>
  );

  const DoneButton = () => (
    <Pressable style={styles.buttonStyle} onPress={CompleteOnBoarding}>
      <Text style={styles.buttonTextStyle}>Get Starts</Text>
    </Pressable>
  );

  return (
    <View style={styles.OnBoardingContainer}>
      <View
        style={
          Platform.OS === 'android'
            ? styles.OnBoardingContainerHeaderAndroid
            : styles.OnBoardingContainerHeaderIos
        }>
        <View style={styles.OnBoardingHeaderContainerLogo}>
          <View style={styles.OnBoardingHeaderTextContainer}>
            <Pressable>
              <Text
                style={styles.OnBoardingSkipBtn}
                onPress={CompleteOnBoarding}>
                skip
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Onboarding
        ref={OnBoardingRef}
        showSkip={false}
        NextButtonComponent={NextButton}
        DoneButtonComponent={DoneButton}
        bottomBarColor="white"
        DotComponent={CustomDot}
        pages={[
          {
            backgroundColor: '#FFFFFF',
            image: (
              <View>
                <Image
                  style={{height: 200, width: 200}}
                  source={require('./assets/OnboardingScreen1.png')}
                />
              </View>
            ),
            title: 'Business Ideas at 35,000 Feet',
            subtitle:
              'Flying solo? Discover fellow passengers for networking, friendship, or even dating—right on your flight! Simply enter your flight number or airport, and see who else is open to connecting onboard.',
            subTitleStyles: styles.subTitleStyle,
            titleStyles: styles.titleStyle,
          },
          {
            backgroundColor: '#FFFFFF',
            image: (
              <View>
                <Image
                  style={{height: 200, width: 200}}
                  source={require('./assets/OnbaordingScreen2.png')}
                />
              </View>
            ),
            title: 'Customize Your In-Flight Crew',
            subtitle:
              'Instantly filter by: “Networking,” “Dating,” “Just Here for a Chat,” or “Business Ideas.”Once you enter your flight/airport, browse profiles of fellow travelers who want to chat—without sharing personal details.',
            subTitleStyles: styles.subTitleStyle,
            titleStyles: styles.titleStyle,
          },
          {
            backgroundColor: '#FFFFFF',
            image: (
              <View>
                <Image
                  style={{height: 200, width: 200}}
                  source={require('./assets/OnbaordingScreen3.png')}
                />
              </View>
            ),
            title: 'Privacy & Security First',
            subtitle:
              'Every profile is temporary—automatically deleted after your flight lands.Enjoy anonymous chat, background checks, and in-app reporting to stay safe.Text-only mode stays active until both parties agree to meet—no pressure.',
            subTitleStyles: styles.subTitleStyle,
            titleStyles: styles.titleStyle,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 26,
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  subTitleStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    paddingHorizontal: 24,
    lineHeight: 24,
  },
  buttonStyle: {
    backgroundColor: '#0ea5e9',
    height: 60,
    width: 240,
    marginRight: 70,
    marginBottom: 180,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: 'white',
    fontSize: 18,
    letterSpacing: 1,
  },
  OnBoardingContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  OnBoardingContainerHeaderAndroid: {
    position: 'absolute',
    zIndex: 100,
    width: Dimensions.get('screen').width,
    paddingTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  OnBoardingContainerHeaderIos: {
    position: 'absolute',
    zIndex: 100,
    marginTop: 50,
    width: Dimensions.get('screen').width,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  OnBoardingHeaderContainerLogo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },
  OnBoardingHeaderTextContainer: {
    paddingRight: 20,
    paddingTop: 10,
  },
  OnBoardingSkipBtn: {
    color: '#94a3b8',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

export default OnboardingScreens;
