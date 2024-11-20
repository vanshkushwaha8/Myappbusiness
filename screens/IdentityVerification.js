import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput,  
  ImageBackground, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';  

const { width, height } = Dimensions.get('window');

const IdentityVerification = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [panCardNumber, setPanCardNumber] = useState('');
  const [selectedAadharFront, setSelectedAadharFront] = useState('');
  const [selectedAadharBack, setSelectedAadharBack] = useState('');
  const [selectedPanCard, setSelectedPanCard] = useState('');
  
  const navigation = useNavigation();

  const selectImage = (side) => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        Alert.alert('Image selection cancelled');
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
      } else {
        if (side === 'front') {
          setSelectedAadharFront(response.assets[0].uri);
        } else if (side === 'back') {
          setSelectedAadharBack(response.assets[0].uri);
        } else if (side === 'pan') {
          setSelectedPanCard(response.assets[0].uri);
        }
      }
    });
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
              imageStyle={{ opacity: 0.35 }}
            >
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                  <Text style={styles.backArrow}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Verify Your Identity!</Text>
              </View>
              
              <Text style={styles.inputLabelA}>Aadhar Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter 12-digit Aadhar No."
                keyboardType="number-pad"
                placeholderTextColor="#999"
                value={aadharNumber}
                onChangeText={setAadharNumber}
              />

              <View style={styles.uploadContainer}>
                <View style={styles.uploadBoxContainer}>
                  <TouchableOpacity style={styles.uploadBox} onPress={() => selectImage('front')}>
                    <Text style={styles.uploadText}>
                      {selectedAadharFront ? 'Change Front Side Image' : 'Upload Aadhar Front Side image'}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.uploadBoxContainer}>
                  <TouchableOpacity style={styles.uploadBox} onPress={() => selectImage('back')}>
                    <Text style={styles.uploadText}>
                      {selectedAadharBack ? 'Change Back Side Image' : 'Upload Aadhar Back Side image'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <Text style={styles.inputLabel}>Pan Card Number</Text>
              <TextInput
                style={styles.inputs}
                placeholder="Enter Pan Card No."
                placeholderTextColor="#999"
                keyboardType="number-pad"
                value={panCardNumber}
                onChangeText={setPanCardNumber}
              />

              <TouchableOpacity style={styles.uploadBoxp} onPress={() => selectImage('pan')}>
                <Text style={styles.uploadTextp}>
                  {selectedPanCard ? 'Change Pan Card Image' : 'Upload Pan Card image'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verifyButton} onPress={() => navigation.navigate('ProfileSubmit')}>
                <Text style={styles.verifyButtonText}>Verify</Text>
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
    width: '100%',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingVertical: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginBottom: 250,
    backgroundColor: '#fff',
  },
  loginBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 40,
    marginTop: -40,
  },
  headerContainer: {
    position: 'absolute',
    top: -15,
    left: 0,
    right: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    zIndex: 10,
  },
  backButton: {
    
    left: 40,
    top: -4,
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
  inputLabelA: {
    fontSize: 14,
    marginTop: 38,
    left: -80,
    color: '#333',
    marginLeft: -80,
  },
  inputLabel: {
    fontSize: 14,
    marginTop: 4,
    left: -80,
    color: '#333',
    marginLeft: -80,
  },
  input: {
    width: '100%',
    height: 50,
    padding: 12,
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 88,
  },
  inputs: {
    width: '100%',
    height: 50,
    padding: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    fontSize: 16,
    paddingHorizontal: 110,
    backgroundColor: '#fff',
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  uploadBoxContainer: {
    width: '78%',
    alignItems: 'center',
  },
  uploadBox: {
    backgroundColor: '#fff',
    padding: 25,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    paddingVertical: 42,
    borderColor: '#3498db',
    borderStyle: 'dotted',
    alignItems: 'center',
  },
  uploadBoxp: {
    width: 355,
    height: 110,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#3498db',
    borderStyle: 'dotted',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
  },
  uploadText: {
    fontSize: 16,
    color: '#3498db',
    padding: 1,
  },
  uploadTextp: {
    fontSize: 16,
    color: '#3498db',
    padding: 1,
  },
  verifyButton: {
    width: 358,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginVertical: 1,
    marginBottom: 80,
  },
  verifyButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

export default IdentityVerification;
