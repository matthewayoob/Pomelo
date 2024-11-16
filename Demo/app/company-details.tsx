import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface Document {
  id: string;
  title: string;
  date: string;
  type: string;
  fileSize?: string;
}

interface CompanyInfo {
  name: string;
  description: string;
  employeeCount: number;
  state: string;
  ventureStatus: string;
  companyType: string;
  foundedYear: string;
  industry: string;
}

export default function CompanyDetails() {
  const router = useRouter();

  const documents: Document[] = [
    {
      id: '1',
      title: 'Business Registration Certificate',
      date: '2024-01-15',
      type: 'PDF',
      fileSize: '2.1 MB'
    },
    {
      id: '2',
      title: 'Financial Statements (Last 2 Years)',
      date: '2024-02-20',
      type: 'PDF',
      fileSize: '4.3 MB'
    },
    {
      id: '3',
      title: 'Business Plan',
      date: '2024-03-01',
      type: 'PDF',
      fileSize: '3.7 MB'
    },
    {
      id: '4',
      title: 'Tax Compliance Certificate',
      date: '2024-01-30',
      type: 'PDF',
      fileSize: '1.2 MB'
    },
    {
      id: '5',
      title: 'Team Resumes/CVs',
      date: '2024-02-15',
      type: 'PDF',
      fileSize: '5.1 MB'
    },
    {
      id: '6',
      title: 'Market Research Report',
      date: '2024-02-28',
      type: 'PDF',
      fileSize: '2.8 MB'
    },
    {
      id: '7',
      title: 'Intellectual Property Documents',
      date: '2024-01-20',
      type: 'PDF',
      fileSize: '1.9 MB'
    },
    {
      id: '8',
      title: 'Previous Grant History',
      date: '2024-03-10',
      type: 'PDF',
      fileSize: '1.5 MB'
    },
    {
      id: '9',
      title: 'Project Timeline & Milestones',
      date: '2024-03-05',
      type: 'PDF',
      fileSize: '2.2 MB'
    },
    {
      id: '10',
      title: 'Budget Breakdown',
      date: '2024-03-15',
      type: 'Excel',
      fileSize: '1.8 MB'
    }
  ];

  const companyInfo: CompanyInfo = {
    name: "Healthcare Startup Inc.",
    description: "Developing innovative healthcare solutions using artificial intelligence and machine learning. Our platform aims to improve patient outcomes while reducing healthcare costs through predictive analytics and personalized care recommendations. We work closely with hospitals and healthcare providers to implement data-driven solutions.",
    employeeCount: 25,
    state: "California",
    ventureStatus: "Seed Funded",
    companyType: "Public Benefit Corporation",
    foundedYear: "2022",
    industry: "Healthcare Technology"
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Company Details</Text> 
      </View> */}

      <ScrollView style={styles.content}>
        {/* Updated Company Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Company Information</Text>
          <View style={styles.infoCard}>
            <View style={styles.nameSection}>
              <Text style={styles.companyName}>{companyInfo.name}</Text>
              <Text style={styles.description}>{companyInfo.description}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <View style={styles.infoColumn}>
                <Text style={styles.label}>Employee Count</Text>
                <Text style={styles.value}>{companyInfo.employeeCount}</Text>
              </View>
              <View style={styles.infoColumn}>
                <Text style={styles.label}>State</Text>
                <Text style={styles.value}>{companyInfo.state}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <View style={styles.infoColumn}>
                <Text style={styles.label}>Founded</Text>
                <Text style={styles.value}>{companyInfo.foundedYear}</Text>
              </View>
              <View style={styles.infoColumn}>
                <Text style={styles.label}>Funding Status</Text>
                <View style={styles.statusContainer}>
                  <View style={styles.statusDot} />
                  <Text style={styles.statusText}>{companyInfo.ventureStatus}</Text>
                </View>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <View style={styles.infoColumn}>
                <Text style={styles.label}>Company Type</Text>
                <Text style={styles.value}>{companyInfo.companyType}</Text>
              </View>
              <View style={styles.infoColumn}>
                <Text style={styles.label}>Industry</Text>
                <Text style={styles.value}>{companyInfo.industry}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Updated Documents Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Attached Documents</Text>
            <TouchableOpacity style={styles.uploadButton}>
              <Ionicons name="add-circle-outline" size={20} color="#006400" />
              <Text style={styles.uploadButtonText}>Upload New</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.documentsContainer}>
            {documents.map((doc) => (
              <TouchableOpacity key={doc.id} style={styles.documentItem}>
                <View style={styles.documentIconContainer}>
                  <Ionicons 
                    name={doc.type === 'PDF' ? 'document-text-outline' : 'document-outline'} 
                    size={24} 
                    color="#006400" 
                  />
                </View>
                <View style={styles.documentInfo}>
                  <Text style={styles.documentTitle}>{doc.title}</Text>
                  <Text style={styles.documentMeta}>
                    {doc.type} • {doc.fileSize} • Added: {doc.date}
                  </Text>
                </View>
                <TouchableOpacity style={styles.documentAction}>
                  <Ionicons name="download-outline" size={20} color="#666" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#006400',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    marginTop: 4,
  },
  infoColumn: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 6,
  },
  statusText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 100, 0, 0.1)',
  },
  uploadButtonText: {
    color: '#006400',
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  documentIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 100, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  documentInfo: {
    flex: 1,
    marginLeft: 12,
  },
  documentTitle: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    marginBottom: 4,
  },
  documentMeta: {
    fontSize: 12,
    color: '#666',
  },
  documentAction: {
    padding: 8,
  },
  nameSection: {
    marginBottom: 16,
  },
  companyName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#666',
    letterSpacing: 0.3,
  },
}); 