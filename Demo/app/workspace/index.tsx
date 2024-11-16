import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

// Define TypeScript interfaces
interface FormData {
  projectTitle: string;
  organizationName: string;
  requestedAmount: string;
  projectDescription: string;
  timeline: string;
  impact: string;
  contactName: string;
  email: string;
  phone: string;
  address: string;
  [key: string]: string; // Index signature for dynamic access
}

interface Section {
  id: string;
  title: string;
}

export default function GrantApplication() {
  const [formData, setFormData] = useState<FormData>({
    projectTitle: '',
    organizationName: '',
    requestedAmount: '',
    projectDescription: '',
    timeline: '',
    impact: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [currentSection, setCurrentSection] = useState<string>('organization');

  const sections: Section[] = [
    { id: 'organization', title: 'Organization Info' },
    { id: 'contact', title: 'Contact Details' },
    { id: 'project', title: 'Project Details' },
    { id: 'budget', title: 'Budget' },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    if (yOffset < 300) setCurrentSection('organization');
    else if (yOffset < 600) setCurrentSection('contact');
    else if (yOffset < 900) setCurrentSection('project');
    else setCurrentSection('budget');
  };

  const handleSubmit = () => {
    const requiredFields = [
      'projectTitle',
      'organizationName',
      'requestedAmount',
      'projectDescription',
      'contactName',
      'email'
    ];
    const emptyFields = requiredFields.filter(field => !formData[field]);
    
    if (emptyFields.length > 0) {
      Alert.alert('Missing Information', 'Please fill in all required fields');
      return;
    }

    console.log('Form submitted:', formData);
    Alert.alert('Success', 'Your grant application has been submitted!');
  };

  return (
    <View style={styles.gradientContainer}>
      <View style={styles.pageContainer}>
        {/* Left Side Navigation - Updated with LinearGradient */}
        <View style={styles.sectionNav}>
          {sections.map((section, index) => (
            <View key={section.id} style={styles.sectionNavItem}>
              <View 
                style={[
                  styles.sectionNumberContainer,
                  currentSection === section.id && styles.activeSectionNumberContainer
                ]}
              >
                <Text 
                  style={[
                    styles.sectionNumber,
                    currentSection === section.id && styles.activeSectionNumber
                  ]}
                >
                  {index + 1}
                </Text>
              </View>
              <Text 
                style={[
                  styles.sectionNavText,
                  currentSection === section.id && styles.activeSectionText
                ]}
              >
                {section.title}
              </Text>
              {index < sections.length - 1 && (
                <View style={styles.sectionConnector} />
              )}
            </View>
          ))}
        </View>

        {/* Main Form Content */}
        <ScrollView 
          style={styles.formContainer}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Grant Application Form</Text>
            
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Organization Information</Text>
              <TextInput
                style={styles.input}
                placeholder="Organization Name *"
                value={formData.organizationName}
                onChangeText={(value) => handleInputChange('organizationName', value)}
              />

              <TextInput
                style={styles.input}
                placeholder="Contact Person Name *"
                value={formData.contactName}
                onChangeText={(value) => handleInputChange('contactName', value)}
              />

              <TextInput
                style={styles.input}
                placeholder="Email Address *"
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Project Details</Text>
              <TextInput
                style={styles.input}
                placeholder="Project Title *"
                value={formData.projectTitle}
                onChangeText={(value) => handleInputChange('projectTitle', value)}
              />

              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Project Description *"
                value={formData.projectDescription}
                onChangeText={(value) => handleInputChange('projectDescription', value)}
                multiline
              />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit Application</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionNav: {
    width: 200,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#006400',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.1)',
  },
  sectionNavItem: {
    marginBottom: 45,
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  sectionNumberContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    zIndex: 2,
  },
  activeSectionNumberContainer: {
    backgroundColor: '#FFFFFF',
  },
  sectionNumber: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  activeSectionNumber: {
    color: '#006400',
  },
  sectionNavText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 20,
    zIndex: 2,
    width: '100%',
  },
  activeSectionText: {
    opacity: 1,
    fontWeight: '600',
  },
  sectionConnector: {
    position: 'absolute',
    left: '50%',
    marginLeft: -1,
    top: 45,
    width: 2,
    height: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    zIndex: 1,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  innerContainer: {
    padding: 40,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});