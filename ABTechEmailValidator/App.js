// App.js

import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, TextInput } from 'react-native';
import validateEmail from 'abtech-email-validation';

export default function App() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleValidate = () => {
    setIsValid(validateEmail(email));
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Enter your email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />
      <Button title='Check Email' onPress={handleValidate} />
      {isValid !== null && (
        <Text style={[styles.result, isValid ? styles.valid : styles.invalid]}>
          {isValid ? 'Valid Email' : 'Invalid Email'}
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    textAlign: 'center',
  },
  valid: {
    color: 'green',
  },
  invalid: {
    color: 'red',
  },
});
