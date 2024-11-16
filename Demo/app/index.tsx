// Dashboard

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard() {
  const { width } = Dimensions.get('window');
  const { height } = Dimensions.get('window');

  const router = useRouter();

  const handleCompanyPress = () => {
    router.push('/company-details'); // This will navigate to /app/company-details.tsx
  };

  return (
    <View style={styles(height).container}>
      <View style={styles(height).searchContainer}>
        <TextInput
          style={styles(height).searchBar}
          placeholder="Search..."
          placeholderTextColor="#666"
        />
        <TouchableOpacity 
          style={styles(height).companyButton} 
          onPress={handleCompanyPress}
        >
          <Text style={styles(height).companyText}>Company</Text>
          <View style={styles(height).profileContainer}>
            <Ionicons name="person" size={30} color="#000" />
          </View>
        </TouchableOpacity>
      </View>
    </View>   
  );
}

const styles = (height: number) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    padding: 20,
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: height * 0.05,
    width: "100%",
  },

  searchBar: {
    height: height * .04,
    width: "70%",
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    //width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    outlineStyle: 'none',
  },

  profileContainer: {
    height: height * .04,
    width: height * .04,
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
  companyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    cursor: 'pointer',
  },
  companyText: {
    paddingLeft: 20,
    marginRight: 10,
    fontSize: 16,
  },
});