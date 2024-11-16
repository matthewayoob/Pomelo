import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Attachments() {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const router = useRouter();

  // Function to handle file selection
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
      });

      if (result.type === 'success') {
        setFile(result);
        setFileUploaded(true);
        alert(`Selected file: ${result.name}`);
      } else {
        console.log('File selection cancelled');
        setFileUploaded(true); // Mark as attempted even if cancelled
      }
    } catch (err) {
      console.error('Error picking document:', err);
      setFileUploaded(false);
    }
  };

  // Function to handle form submission and navigation
  const handleNext = () => {
    if (!description) {
      alert('Please provide a description.');
      return;
    }
    router.push('/loading');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Funding</Text>

      {/* Team Description Input */}
      <TextInput
        style={styles.input}
        placeholder="Describe your team"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* File Upload Button */}
      <TouchableOpacity style={styles.uploadBox} onPress={pickDocument}>
        <Text style={styles.uploadText}>
          {file ? `Attached: ${file.name}` : 'Attach File'}
        </Text>
        {fileUploaded && (
          <Ionicons name="checkmark-circle" size={24} color="#4CAF50" style={styles.checkIcon} />
        )}
      </TouchableOpacity>

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Find Me Funding</Text>
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
    fontSize: 36,
    fontWeight: 'bold',
    color: '#006400',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '60%',
    height: 150,
    borderColor: '#B3C7E6',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  uploadBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#4A90E2',
    marginBottom: 20,
  },
  uploadText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  checkIcon: {
    marginLeft: 10,
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