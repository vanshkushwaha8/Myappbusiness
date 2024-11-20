import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const emailSuggestions = ['example@gmail.com', 'test@yahoo.com', 'user@hotmail.com'];
  const filteredSuggestions = email
    ? emailSuggestions.filter((s) => s.toLowerCase().includes(email.toLowerCase()))
    : [];

  return (
    <ImageBackground
      source={require('../assets/img.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.outerContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.container}>
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
                <Text style={styles.title}>You’re one step ahead!</Text>
                <Image source={require('../assets/inox.png')} style={styles.contactIcon} />
              </View>

              <View style={styles.tabContainer}>
                <TouchableOpacity
                  style={[styles.tabButton, isLogin && styles.activeTab]}
                  onPress={() => setIsLogin(true)}
                >
                  <Text style={isLogin ? styles.tabTextActive : styles.tabText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.tabButton, !isLogin && styles.activeTab]}
                  onPress={() => setIsLogin(false)}
                >
                  <Text style={!isLogin ? styles.tabTextActive : styles.tabText}>Register</Text>
                </TouchableOpacity>
              </View>

              {isLogin ? (
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Username/Email</Text>
                  <View style={styles.inputWrapper}>
                 
                  <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Enter your email"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                  />
                 
                 {filteredSuggestions.map((suggestion, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => setEmail(suggestion)}
                      style={styles.suggestionItem}
                    >
                      <Text style={styles.suggestionText}>{suggestion}</Text>
                    </TouchableOpacity>
                  ))}
                
                   </View>
                <Text style={styles.inputLabel}>Password</Text>
               
                <View style={styles.inputWrapper}>
  
  <TextInput
    style={styles.inputWithIcon}
    placeholder="Enter your password"
    placeholderTextColor="#999"
    secureTextEntry={!showPassword}
    value={password}
    onChangeText={setPassword}
  />
  <Icon
    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
    size={20}
    color="#999"
    style={styles.inputIcon}
    onPress={() => setShowPassword(!showPassword)}
  />
</View>

               

                {/* Forgot Password Link */}
                <Text style={styles.forgotPassword}>Forgot Password?</Text>

                  <TouchableOpacity
                    style={styles.loginButton}
                    
                  >
                    <Text style={styles.loginButtonText}>Log In</Text>
                  </TouchableOpacity>
                  <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <Icon name="call-outline" size={20} color="#007aff" style={styles.socialIcon} />
                  <Text style={styles.socialButtonText}>Continue with Mobile Number</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Icon name="logo-google" size={20} color="#DB4437" style={styles.socialIcon} />
                  <Text style={styles.socialButtonText}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Icon name="logo-apple" size={20} color="#000" style={styles.socialIcon} />
                  <Text style={styles.socialButtonText}>Continue with Apple</Text>
                </TouchableOpacity>
              </View>
                </View>
              ) : (
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Full Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your full name"
                    placeholderTextColor="#999"
                  />

                  <Text style={styles.inputLabel}>Email Address (Optional)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#999"
                  />

                  <Text style={styles.inputLabel}>Mobile Number</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your mobile number"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                  />

                  <Text style={styles.inputLabel}>Password</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                  />

                  <Text style={styles.inputLabel}>City you work in</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your city"
                    placeholderTextColor="#999"
                  />

                  <Text style={styles.termsText}>
                    By signing up, you agree to our{' '}
                    <Text style={styles.linkText}>Terms & Conditions</Text> and{' '}
                    <Text style={styles.linkText}>Privacy Policy</Text>.
                  </Text>

                  <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Otp')}>
                    <Text style={styles.loginButtonText}>Register</Text>
                  </TouchableOpacity>
                </View>
              )}
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
 
    inputLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  suggestionItem: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
  },
  suggestionText: {
    fontSize: 14,
    color: '#333',
  },
backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 30,
  },
  outerContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
    borderRadius: 30,
    margin: 0,
    marginBottom: 170,
  },
  loginBackground: {
    flex: 1,  
    justifyContent: 'center', 
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40, // Space for the status bar
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 100, // Adjusted to be below the fixed header
    marginHorizontal: 60,
    backgroundColor: '#f0f0f0',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#006994',
  },
  tabText: {
    fontSize: 16,
    color: '#999',
  },
  tabTextActive: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  sliderIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '50%',
    height: 0,
    backgroundColor: '#006994',
    borderRadius: 5,
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 200,
    paddingHorizontal:45,
    
    marginHorizontal: 0,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  inputWithIcon: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingRight: 40, // Adds space for the icon on the right
  },
  inputIcon: {
    position: 'absolute',
    right: 15, // Adjust this value for better alignment
  },
  passwordContainer: {
    justifyContent: 'space-between',
  },
  showPasswordIcon: {
    paddingLeft:130,
  },
  forgotPassword: {
    color: '#333',
    textAlign: 'right',
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: '#006994',
    paddingVertical: 15,
    borderRadius: 10,
    color:'#006994',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 38,
    
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  orText: {
    textAlign: 'center',
    color: '#aaa',
    marginBottom: 20,
  },
  socialContainer: {
    marginBottom: 10,
    paddingHorizontal: 50,
    marginHorizontal: 41,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  socialIcon: {
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 11,
    color: '#333',
  },

  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#006994',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  
  },
});

export default LoginRegister;
