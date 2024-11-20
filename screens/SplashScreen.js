// Importing React and required components
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importing images
import landImage from '../assets/land.png'; // Main background image
import logoImage from '../assets/splashImage.jpeg'; // Splash logo

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        One stop for all <Text style={styles.highlightText}>your needs!</Text>
      </Text>

      <Image source={logoImage} style={styles.image} />

      <Text style={styles.appName}>FRIENDS</Text>

      <Text style={styles.tagline}>Your Home Services Expert</Text>
      <Text style={styles.taglines}>Quick. Affordable. Trusted.</Text>

      <Text style={styles.taglines}>Hi, nice to meet you!</Text>

      <Text style={styles.greeting}>See requests around</Text>

      <View style={styles.locationContainer}>
        <Image source={landImage} style={styles.images} />

        {/* Removed top margin from TouchableOpacity */}
        <TouchableOpacity style={styles.buttons}>
          <Image source={require('../assets/locations.png')} style={styles.contactIcon} />
          <Text style={styles.locationText}>Your current location</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LoginRegister')} // Navigate to Login/Register screen
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  highlightText: {
    color: '#3498db',
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 30,
    borderRadius: 15,
  },
  images: {
    width: 290,
    height: 90,
    marginVertical: 0, // Reduced spacing for better alignment
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginVertical: 10,
  },
  tagline: {
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
    marginVertical: 5,
  },
  taglines: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginVertical: 5,
  },
  greeting: {
    fontSize: 24,
    color: '#7f8c8d',
    marginVertical: 15,
  },
  locationContainer: {
    flexDirection: 'column',
    width:395,
    alignItems: 'center',
    marginVertical: 10, // Reduced spacing to remove top gap
  },
  locationText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center', // Center aligned content
    alignItems: 'center',
    width: '85%',
    paddingVertical: 10,
    backgroundColor: '#3498db',
    borderRadius: 10,
    marginBottom: 10, // Reduced bottom margin for better alignment
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  button: {
    width:155,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#3498db',
    fontSize: 16,
    textAlign: 'center',
  },
  contactIcon: {
    width: 20,
    height: 20,
    marginRight: 8, // Adds space between icon and text
  },
});

export default SplashScreen;
