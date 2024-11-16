// Dashboard

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomelo.</Text>
      {/* Tagline */}
      <Text style={styles.tagline}>The Common App for Government Funding.</Text>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/search')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    padding: 20,
  },
  title: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#006400',
    marginBottom: 10,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333333',
    marginVertical: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#004225',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});