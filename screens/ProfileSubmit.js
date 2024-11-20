import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const ProfileSubmit = ({ navigation }) => {
  const [step, setStep] = useState(1); // Step 1: Profile submission, Step 2: Notification permission, Step 3: Phone call permission
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (step === 1) {
      // Automatically move to Step 2 after 3 seconds
      const timer = setTimeout(() => {
        setStep(2);
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
    if (step === 2) {
      // Automatically show "Congratulations" for 2 seconds, then move to Step 3
      const timer = setTimeout(() => {
        setStep(3);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleAllowNotification = () => {
    setStep(2); // Transition to Congratulations after notification
    setErrorMessage(''); // Clear any previous error
  };

  const handleDontAllowNotification = () => {
    setErrorMessage('You are not done yet! Please click the Allow button.');
  };

  const handleDone = () => {
    if (step === 3) {
      setStep(4); // Transition to the next step
    }
  };

  if (step === 1) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your profile is submitted!</Text>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../assets/splashImage.jpeg')} // Your splash image
            style={styles.splashImage}
          />
        </View>
        <View style={styles.card}>
          <Image
            source={require('../assets/bell.png')} // Your bell icon
            style={styles.bellIcon}
          />
          <Text style={styles.cardText}>
            Your profile will be reviewed by Admin.
          </Text>
          <Text style={styles.cardTextA}>
            You will get notified once your profile is reviewed.
          </Text>
        </View>
      </View>
    );
  }

  if (step === 2) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>One stop for all your needs!</Text>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../assets/splashImage.jpeg')} // Your splash image
            style={styles.splashImage}
          />
        </View>
        {/* Congratulations Card */}
        <View style={styles.card}>
          <Image
            source={require('../assets/check.png')} // Checkmark icon
            style={styles.checkIcon}
          />
          <Text style={styles.cardText}>
            Congratulations! Your profile got verified!
          </Text>
          <TouchableOpacity style={styles.doneButton}>
            <Text style={styles.doneButtonText}>Done !</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (step === 3) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>One step for all your needs!</Text>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../assets/splashImage.jpeg')} // Your splash image
            style={styles.splashImage}
          />
        </View>
        <View style={styles.card}>
          <Image
            source={require('../assets/bell.png')} // Phone icon
            style={styles.bellIcon}
          />
          <Text style={styles.cardText}>
            Allow FRIENDS to send Notification?
          </Text>
          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.allowButton} onPress={handleDone}>
              <Text style={styles.allowButtonText}>Allow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dontAllowButton}
              onPress={() =>
                setErrorMessage(
                  'You are not done yet! Please click the Allow button.'
                )
              }
            >
              <Text style={styles.dontAllowButtonText}>Don’t Allow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // Step 4
  if (step === 4) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>One step for all your needs!</Text>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../assets/splashImage.jpeg')} // Your splash image
            style={styles.splashImage}
          />
        </View>
        <View style={styles.card}>
          <Image
            source={require('../assets/Vectors.png')} // Phone icon
            style={styles.bellIcon}
          />
          <Text style={styles.cardText}>
            Allow FRIENDS to make and manage phone calls?
          </Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.allowButton} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.allowButtonText}>Allow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dontAllowButton}
              onPress={() =>
                setErrorMessage(
                  'You are not done yet! Please click the Allow button.'
                )
              }
            >
              <Text style={styles.dontAllowButtonText}>Don’t Allow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return null;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 430,
  },

 title: {
    right: 40,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#B8B8B8',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageWrapper: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.2, // Reduced opacity to match the design
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 100,
    paddingHorizontal: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: '20%', // Overlaps the splash image
    borderWidth: 1,
    borderColor: '#3498db', // Border color matches the design
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 80,
  },
  bellIcon: {
    position: 'absolute',
    top: 0,
    width: 40,
    color: '#3498db',
    height: 40,
  },
cardTextA: {
  fontSize: 18,
  color: '#3498db',
  textAlign: 'center',
  marginTop: 5,
},

  checkIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  bellIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    color: '#3498db',
    textAlign: 'center',
    marginVertical: 10,
  },
  doneButton: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  doneButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 5,
  },
  allowButton: {
    width: 270,
    backgroundColor: '#3498db',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  allowButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dontAllowButton: {
    
    backgroundColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  dontAllowButtonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileSubmit;
