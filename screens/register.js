import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert,
  ImageBackground,
} from 'react-native';

import { useState } from 'react';

export default function App() {
  const scale = new Animated.Value(1);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handlesave = () => {
  console.log({name, email, password});
  Alert.alert(
        'Registered!',
        'Your information has been registered successfully.'
  )
};

  const handleSubmit = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.85,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      
    
    });
  };

  return (
    <ImageBackground
      source={require('./images.jpg')}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.form}>

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Jose Delacruz"  
            placeholderTextColor="#ccc" onChangeText={setName}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email@example.com"
            placeholderTextColor="#ccc"
            keyboardType="email-address" onChangeText={setEmail}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc" onChangeText={setPassword}
            secureTextEntry={true}
          />

          <Animated.View style={{ transform: [{ scale }] }}>
            <TouchableOpacity
           style={styles.submitBtn}
          onPress={handlesave}
          activeOpacity={0.8}
          >   
  <Text style={styles.fontColor}>Submit</Text>
</TouchableOpacity>
          </Animated.View>

        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    backgroundColor: 'rgba(128, 128, 128, 0.9)',
    padding: 20,
    borderRadius: 10,
    gap: 10,
    width: 300,
  },

  label: {
    color: 'white',
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    color: 'white',
  },

  fontColor: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  submitBtn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});