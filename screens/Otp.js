import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

const Otp = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const inputs = useRef([]);

  // Timer countdown effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ImageBackground
        source={require('../assets/img.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.overlay}>
            <ImageBackground
              source={require('../assets/loginbg.png')}
              style={styles.loginBackground}
              resizeMode="cover"
              imageStyle={{ opacity: 0.2 }}
            >
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                  <Text style={styles.backArrow}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>You're almost done!</Text>
                <Image source={require('../assets/inox.png')} style={styles.contactIcon} />
              </View>

              <Image source={require('../assets/Vector.png')} style={styles.contactIcons} />

              <Text style={styles.subtitle}>Enter verification code</Text>
              <Text style={styles.phoneText}>
                We have sent you a 4-digit verification code on
              </Text>
              <Text style={styles.phoneNumber}>+91 9576231588</Text>

              <View style={styles.otpContainer}>
                {otp.map((_, index) => (
                  <TextInput
                    key={index}
                    style={styles.otpInput}
                    maxLength={1}
                    keyboardType="number-pad"
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === 'Backspace') handleBackspace('', index);
                    }}
                    ref={(ref) => (inputs.current[index] = ref)}
                  />
                ))}
              </View>
              <Text style={styles.timer}>00:{timer < 10 ? `7${timer}` : timer}</Text>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigation.navigate('IdentityVerification')}
              >
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 50,
    borderRadius: 30,
    marginBottom: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight white overlay
  },
  headerContainer: {
    position: 'absolute',
    top: -55,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40, // Space for the status bar
    paddingBottom: 10,
    paddingHorizontal: 20,
    
    zIndex: 10,
  },
  backButton: {
    position: 'absolute',
    left: 2,
    top: 24,
    padding: 10,
  },
  backArrow: {
    fontSize: 28,
    color: '#313333',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#313333',
    textAlign: 'center',
    flex: 1,
  },
  contactIcon: {
    width: 30,
    height: 38,
    marginRight: 10,
  },
  contactIcons: {
    marginBottom: 10,
    width: 240,
    height: 60,
    resizeMode: 'contain',
  },
  loginBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  phoneText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
    width: '100%',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f5f5f5',
  },
  timer: {
    marginVertical: 10,
    fontSize: 16,
    color: '#999',
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: '#006994',
    paddingVertical: 12,
    paddingHorizontal: 112,
    borderRadius: 8,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Otp;
